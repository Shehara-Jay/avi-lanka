import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type BookingRequest = {
  name?: string;
  email?: string;
  phone?: string;
  contactMethod?: string;

  type?: string;
  item?: string;
  itemTitle?: string;

  travelDate?: string;

  adults?: string | number;
  children?: string | number;

  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingRequest;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const contactMethod = body.contactMethod?.trim() ?? "";

    const type = body.type?.trim() || "general";
    const item = body.item?.trim() ?? "";
    const itemTitle = body.itemTitle?.trim() ?? "";

    const travelDate = body.travelDate?.trim() ?? "";

    const adults = String(body.adults ?? "1");
    const children = String(body.children ?? "0");

    const message = body.message?.trim() ?? "";

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const emailUser =
      process.env.BOOKING_EMAIL_USER;

    const emailTo =
      process.env.BOOKING_EMAIL_TO;

    const appPassword =
      process.env.BOOKING_EMAIL_APP_PASSWORD;

    if (!emailUser || !emailTo || !appPassword) {
      console.error(
        "Booking email environment variables are missing."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: emailUser,
          pass: appPassword,
        },
      });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);

    const safeContactMethod =
      escapeHtml(contactMethod || "Not specified");

    const safeType = escapeHtml(type);

    const safeItem =
      escapeHtml(
        itemTitle ||
          item ||
          "General inquiry"
      );

    const safeTravelDate =
      escapeHtml(
        travelDate || "Not specified"
      );

    const safeAdults =
      escapeHtml(adults);

    const safeChildren =
      escapeHtml(children);

    const safeMessage =
      escapeHtml(message).replaceAll(
        "\n",
        "<br />"
      );

    await transporter.sendMail({
      from: `"Avi Lanka Website" <${emailUser}>`,

      to: emailTo,

      replyTo: email,

      subject: `New Avi Lanka Inquiry - ${
        itemTitle ||
        type ||
        "General Inquiry"
      }`,

      text: `
New Avi Lanka Booking / Inquiry

Customer Details
----------------
Name: ${name}
Email: ${email}
Phone / WhatsApp: ${phone}
Preferred Contact: ${contactMethod || "Not specified"}

Inquiry
-------
Type: ${type}
Selected Item: ${itemTitle || item || "General inquiry"}

Travel Details
--------------
Travel Date: ${travelDate || "Not specified"}
Adults: ${adults}
Children: ${children}

Message
-------
${message}
      `.trim(),

      html: `
        <div
          style="
            margin:0;
            padding:32px;
            background:#f3f7f0;
            font-family:Arial,Helvetica,sans-serif;
            color:#182018;
          "
        >
          <div
            style="
              max-width:680px;
              margin:0 auto;
              background:#ffffff;
              border-radius:18px;
              overflow:hidden;
              border:1px solid #e6ebe3;
            "
          >
            <div
              style="
                padding:28px 30px;
                background:#102719;
                color:#ffffff;
              "
            >
              <div
                style="
                  font-size:11px;
                  letter-spacing:2px;
                  text-transform:uppercase;
                  color:#bdf5b5;
                  margin-bottom:10px;
                "
              >
                Avi Lanka
              </div>

              <h1
                style="
                  margin:0;
                  font-size:28px;
                  line-height:1.2;
                "
              >
                New Booking / Inquiry
              </h1>
            </div>

            <div style="padding:30px;">
              <h2
                style="
                  margin:0 0 16px;
                  font-size:18px;
                  color:#008000;
                "
              >
                Customer Details
              </h2>

              <table
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="
                  border-collapse:collapse;
                  margin-bottom:28px;
                "
              >
                <tr>
                  <td style="padding:8px 0;color:#6b746b;">
                    Name
                  </td>

                  <td
                    style="
                      padding:8px 0;
                      font-weight:bold;
                      text-align:right;
                    "
                  >
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:8px 0;color:#6b746b;">
                    Email
                  </td>

                  <td
                    style="
                      padding:8px 0;
                      text-align:right;
                    "
                  >
                    ${safeEmail}
                  </td>
                </tr>

                <tr>
                  <td style="padding:8px 0;color:#6b746b;">
                    Phone / WhatsApp
                  </td>

                  <td
                    style="
                      padding:8px 0;
                      text-align:right;
                    "
                  >
                    ${safePhone}
                  </td>
                </tr>

                <tr>
                  <td style="padding:8px 0;color:#6b746b;">
                    Preferred Contact
                  </td>

                  <td
                    style="
                      padding:8px 0;
                      text-align:right;
                    "
                  >
                    ${safeContactMethod}
                  </td>
                </tr>
              </table>

              <h2
                style="
                  margin:0 0 16px;
                  font-size:18px;
                  color:#008000;
                "
              >
                Inquiry
              </h2>

              <table
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="
                  border-collapse:collapse;
                  margin-bottom:28px;
                "
              >
                <tr>
                  <td style="padding:8px 0;color:#6b746b;">
                    Type
                  </td>

                  <td
                    style="
                      padding:8px 0;
                      font-weight:bold;
                      text-align:right;
                    "
                  >
                    ${safeType}
                  </td>
                </tr>

                <tr>
                  <td style="padding:8px 0;color:#6b746b;">
                    Selected Item
                  </td>

                  <td
                    style="
                      padding:8px 0;
                      font-weight:bold;
                      text-align:right;
                    "
                  >
                    ${safeItem}
                  </td>
                </tr>
              </table>

              <h2
                style="
                  margin:0 0 16px;
                  font-size:18px;
                  color:#008000;
                "
              >
                Travel Details
              </h2>

              <table
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="
                  border-collapse:collapse;
                  margin-bottom:28px;
                "
              >
                <tr>
                  <td style="padding:8px 0;color:#6b746b;">
                    Travel Date
                  </td>

                  <td
                    style="
                      padding:8px 0;
                      text-align:right;
                    "
                  >
                    ${safeTravelDate}
                  </td>
                </tr>

                <tr>
                  <td style="padding:8px 0;color:#6b746b;">
                    Adults
                  </td>

                  <td
                    style="
                      padding:8px 0;
                      text-align:right;
                    "
                  >
                    ${safeAdults}
                  </td>
                </tr>

                <tr>
                  <td style="padding:8px 0;color:#6b746b;">
                    Children
                  </td>

                  <td
                    style="
                      padding:8px 0;
                      text-align:right;
                    "
                  >
                    ${safeChildren}
                  </td>
                </tr>
              </table>

              <h2
                style="
                  margin:0 0 12px;
                  font-size:18px;
                  color:#008000;
                "
              >
                Customer Message
              </h2>

              <div
                style="
                  padding:18px;
                  border-radius:12px;
                  background:#f3f8f0;
                  line-height:1.7;
                  color:#384238;
                "
              >
                ${safeMessage}
              </div>

              <p
                style="
                  margin:28px 0 0;
                  font-size:12px;
                  color:#8a918a;
                "
              >
                Reply directly to this email to respond
                to ${safeName}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message:
        "Your inquiry has been sent successfully.",
    });
  } catch (error) {
    console.error(
      "Booking email error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't send your inquiry. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}