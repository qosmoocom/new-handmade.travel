const sendEmail = require('../utils/sendEmail');
exports.TouristVerf = async (req, res) => {
  const {
    send_email,
  } = req.body;
  console.log(req.body);
  const msg = {
    to: `${send_email}`,
    subject: 'Handmade.travel',
    html: `
<div>salom111</div>
      `,
  };
  try {
    await sendEmail(msg);
    res.status(200).json({ success: true, data: msg  });
  } catch (err) {console.log('err', err);}
};
