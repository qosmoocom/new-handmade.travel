const sendEmail = require('../utils/sendEmail');
exports.TouristVerf = async (req, res) => {
  const {
    send_email,
  } = req.body;

  let randomNumber = Math.floor(Math.random() * 999999)

  const msg = {
    to: `${send_email}`,
    subject: 'Handmade.travel',
    html: `
<div>${randomNumber}</div>
      `,
  };
  try {
    await sendEmail(msg);
    res.status(200).json({ success: true, data: msg , randomNumber });
  } catch (err) {console.log('err', err);}
};
