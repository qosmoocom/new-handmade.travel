const sendEmail = require("../utils/sendEmail");
exports.send_email_more = async (req, res, next) => {
  let messages;
  let comment;
  if (!req.body.messanger) {
    messages = "Нет информации";
  } else {
    messages = req.body.messanger;
  }
  if (!req.body.commit) {
    comment = "Нет информации";
  } else {
    comment = req.body.commit;
  }
  const { action_id, tourID, name, phone, email, send_email } = req.body;

  const msg = {
    to: `${send_email}`,
    subject: "Handmade.travel",
    html: `
        <h2 style="text-aligin:center"> Клиент просить Вас расказать подробно про тур <h2/>
        
        <div style="
        position: relative;
  width: 100%;
  height: auto;
  padding: 15px;
  position: relative;
  background: #fff;
      " className="card">
  <div style=" position: relative;
  display: flex;
  column-gap: 20px;
  align-items: center;" className="name">
      <div className="avatar">
          <img style=" width: 70px;
  border-radius: 50%;" src="./user.png" alt="">
      </div>
      <div style="  position: relative;
  font-size: 22px;" className="user_name">
          <h3>Name: ${name}</h3>
      </div>
  </div>
  <div style="padding-left: 10px;" className="action">
      <ul>
          <li style=" font-size: 20px;
  font-style: italic;">tel: ${phone}</li>
      </ul>
  </div>
  <div style="padding-left: 10px;" className="action">
      <ul>
          <li style=" font-size: 20px;
  font-style: italic;">Action_id: ${action_id}</li>
      </ul>
  </div>
  <div style="padding-left: 10px;" className="action">
  <ul>
      <li style=" font-size: 20px;
  font-style: italic;">Email: ${email}</li>
  </ul>
  </div>
  <div style="padding-left: 10px;" className="action">
  <ul>
      <li style=" font-size: 20px;
  font-style: italic;">Messanger: ${messages}</li>
  </ul>
  </div>

  <div style="padding-left: 10px;" className="action">
  <ul>
      <li style=" font-size: 20px;
  font-style: italic;">Commit: ${comment}</li>
  </ul>
  </div>
</div>
      `,
  };
  try {
    await sendEmail(msg);
    res.status(200).json({ success: true, data: "Email is sent" });
  } catch (err) {
    // console.log(err);
    throw err
  }
};
