const { OAuth2Client } = require("google-auth-library");
const nodemailer = require("nodemailer");

const GOOGLE_MAILER_CLIENT_ID =
  "251932485034-phoeakkguu3vgrquqtjpnlurh4p7t3ok.apps.googleusercontent.com";
const GOOGLE_MAILER_CLIENT_SECRET = "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";
const GOOGLE_MAILER_REFRESH_TOKEN =
  "1//04sC8dq03P8sSCgYIARAAGAQSNwF-L9IrBdysROhZJLP28_GfuNoxh6JAPQn2Kz5AaibSga0T9VkG3qBbJ90pOnJJK641-GY_1X0";
const ADMIN_EMAIL_ADDRESS = "dongoccan9b@gmail.com";

const myOAuth2Client = new OAuth2Client(
  GOOGLE_MAILER_CLIENT_ID,
  GOOGLE_MAILER_CLIENT_SECRET
);

myOAuth2Client.setCredentials({
  refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
});

class sendEmail {
  sendEmail = async function (req, res) {
    try {
      const { email, subject, content } = req.body;
      if (!email || !subject || !content)
        throw new Error("Please provide email, subject and content!");

      const myAccessTokenObject = await myOAuth2Client.getAccessToken();

      const myAccessToken = myAccessTokenObject.token;

      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: ADMIN_EMAIL_ADDRESS,
          clientId: GOOGLE_MAILER_CLIENT_ID,
          clientSecret: GOOGLE_MAILER_CLIENT_SECRET,
          refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
          accessToken: myAccessToken,
        },
      });

      const mailOptions = {
        to: email, // Gửi đến ai?
        subject: subject, // Tiêu đề email
        html: `<h3>${content}</h3>`, // Nội dung email
      };

      await transport.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: error.message });
    }
  };
}

module.exports = new sendEmail();
