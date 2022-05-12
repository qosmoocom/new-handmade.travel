const sendEmail = require('../utils/sendEmail');
exports.send_phone_email = async (req, res, next) => {
  const { action_id, name, date, phone, time, send_email,whereFrom } = req.body;
  const msg = {
    to: `${send_email}`,
    subject: "Handmade.travel",
    html: `
      <h2 style="text-aligin:center"> Перезвоните пожалуйста клиенту <h2/>
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
                            font-style: italic;">Where from: ${whereFrom}</li>
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
            <div style="padding-left: 10px;" >
              <ul>
                <li style="font-size: 20px;
                           font-style: italic;">Date: ${date}</li>
              </ul>
            </div>
            <div style="padding-left: 10px;" >
              <ul>
                <li style="font-size: 20px;
                          font-style: italic;">Time: ${time}</li>
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
