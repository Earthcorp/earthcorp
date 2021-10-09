const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.export = class Email {
    constructor(user, url) {
        this.to = user.email;
        this.url = url;
        this.fromEmail = 'narendra.s@earthcorp.in';
        this.fromName = 'earthcorp.in';
    }

    async sendMagicLink() {
        const mailOptions = {
            to: this.to,
            from: {
                email: this.fromEmail,
                name: this.fromName,
            },
            templateId: 'd-af000385f56744369f67d94510c1bc35',
            dynamic_template_data: {
                url: this.url,
            },
        }:

        await sgMail.send(mailOptions).then(() => {}, console.error);
    }
};