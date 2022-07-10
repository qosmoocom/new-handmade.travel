const sendEmail = require('../utils/sendEmail');
exports.send_lid_magnit = async (req, res, next) => {
  const { action_id, name, mail, phone, send_email } = req.body;
  const msg = {
    to: `${send_email}`,
    subject: 'Handmade.travel',
    html: `
      <h2 style="text-aligin:center">Клиент возпользовалься лид магнитом<h2/>
      <div style="position: relative;
                  width: 100%;
                  height: auto;
                  padding: 15px;
                  position: relative;
                  background: #fff;">
          <div style="position: relative;
                      display: flex;
                      column-gap: 20px;
                      align-items: center;" >
              <div style="position: relative;
                          font-size: 22px;" >
                  <h3>Name: ${name}</h3>
              </div>
            </div>
            <div style="padding-left: 10px;" >
              <ul>
                  <li style="font-size: 20px;
                             font-style: italic;">mail: ${mail}</li>
              </ul>
            </div>
            <div style="padding-left: 10px;" >
              <ul>
                  <li style="font-size: 20px;
                            font-style: italic;">tel: ${phone}</li>
              </ul>
            </div>
            <div style="padding-left: 10px;" >
              <ul>
                  <li style="font-size: 20px;
                            font-style: italic;">Action_id: ${action_id}</li>
              </ul>
            </div>
        </div>
      `,
  };
  try {
    await sendEmail(msg);
    res.status(200).json({ success: true, data: 'Email is sent' });
  } catch (err) {}
};
