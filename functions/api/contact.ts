/// <reference types="@cloudflare/workers-types" />
import { Resend } from "resend";

interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL?: string;
  TURNSTILE_SECRET_KEY: string;
}

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  age: string;
  program_focus: string[];
  goal: string;
  referral?: string;
  "cf-turnstile-response": string;
}

interface TurnstileResponse {
  success: boolean;
  "error-codes"?: string[];
}

const programLabels: Record<string, string> = {
  "the-mat": "The Mat — Wrestling & Character Development",
  "the-gym": "The Gym — Physical Fitness & Weight Management",
  "the-nutrients": "The Nutrients — Nutrition, Meal Planning & Supplements",
  "the-study": "The Study — Academic Prep & College Readiness",
  unsure: "Not sure yet — Needs guidance",
};

const referralLabels: Record<string, string> = {
  "community-partner": "Community Partner",
  "friend-family": "Friend / Family",
  "social-media": "Social Media",
  "online-search": "Online Search",
  other: "Other",
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    const formData: ContactForm = await request.json();
    const { name, email, phone, age, program_focus, goal, referral } = formData;
    const turnstileToken = formData["cf-turnstile-response"];

    // Verify Turnstile token
    if (!turnstileToken) {
      return new Response(
        JSON.stringify({
          error: "Security verification failed. Please try again.",
        }),
        { status: 400, headers },
      );
    }

    const turnstileVerify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      },
    );

    const turnstileResult: TurnstileResponse = await turnstileVerify.json();

    if (!turnstileResult.success) {
      console.error(
        "Turnstile verification failed:",
        turnstileResult["error-codes"],
      );
      return new Response(
        JSON.stringify({
          error: "Security verification failed. Please try again.",
        }),
        { status: 400, headers },
      );
    }

    // Validation
    if (!name || !email || !age || !goal) {
      return new Response(
        JSON.stringify({ error: "Name, email, age, and goal are required" }),
        { status: 400, headers },
      );
    }

    if (!program_focus || program_focus.length === 0) {
      return new Response(
        JSON.stringify({ error: "Please select at least one program focus" }),
        { status: 400, headers },
      );
    }

    const resend = new Resend(env.RESEND_API_KEY);
    const toEmail = env.CONTACT_EMAIL || "delivered@resend.dev";

    // Format program focus for email
    const programList = program_focus
      .map((p) => programLabels[p] || p)
      .map((p) => `<li>${p}</li>`)
      .join("");

    const { error } = await resend.emails.send({
      from: "The Roost <info@roostacademy.org>", // Update with your verified domain
      to: toEmail,
      replyTo: email,
      subject: `New Registration: ${name} (Age ${age})`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #000; border-bottom: 2px solid #f5693c; padding-bottom: 10px;">
            New Registration Request
          </h1>

          <h2 style="color: #2d7864; margin-top: 24px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666;">Name:</td>
              <td style="padding: 8px 0;"><strong>${name}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Phone:</td>
              <td style="padding: 8px 0;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Participant Age:</td>
              <td style="padding: 8px 0;"><strong>${age}</strong></td>
            </tr>
          </table>

          <h2 style="color: #2d7864; margin-top: 24px;">Step 1: Find Your Why</h2>
          <p style="color: #666; margin-bottom: 8px;">Interested in closing their gap through:</p>
          <ul style="margin: 0; padding-left: 20px;">
            ${programList}
          </ul>

          <h2 style="color: #2d7864; margin-top: 24px;">Step 2: Define Your What</h2>
          <blockquote style="margin: 0; padding: 16px; background: #f0ebe6; border-left: 4px solid #f5693c; font-style: italic;">
            "${goal.replace(/\n/g, "<br />")}"
          </blockquote>

          ${
            referral
              ? `
          <h2 style="color: #2d7864; margin-top: 24px;">Referral Source</h2>
          <p>${referralLabels[referral] || referral}</p>
          `
              : ""
          }

          <hr style="margin-top: 32px; border: none; border-top: 1px solid #ddd;" />
          <p style="color: #999; font-size: 12px;">
            This message was sent from the registration form at roostacademy.org
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: "Failed to send message" }), {
        status: 500,
        headers,
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Registration sent successfully",
      }),
      { status: 200, headers },
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500, headers },
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
