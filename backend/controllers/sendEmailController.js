const sendEmail = require('../utils/sendEmail');
exports.send_Email = async (req, res, next) => {
  let easy_message;
  let comments;
  let age_2_12;
  let age_6_2;
  if (!req.body.Удобный_мессенджер) {
    easy_message = 'Нет информации';
  } else {
    easy_message = req.body.Удобный_мессенджер;
  }
  if (!req.body.komment) {
    comments = 'Нет информации';
  } else {
    comments = req.body.komment;
  }
  if (!req.body.age_2_12) {
    age_2_12 = 'Нет информации';
  } else {
    age_2_12 = req.body.age_2_12;
  }
  if (!req.body.age_6_2) {
    age_6_2 = 'Нет информации';
  } else {
    age_6_2 = req.body.age_6_2;
  }
  const {
    action_id,
    tourID,
    name,
    phone,
    email,
    start_date,
    age_12_plus,
    home_type,
    service,
    send_email,
  } = req.body;

  const msg = {
    to: `${send_email}`,
    subject: 'Handmade.travel',
    html: `
      <h2 style="text-aligin:center"> Заявка на бронирование тура<h2/>
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
      font-style: italic;">Service: ${service}</li>
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
      font-style: italic;">Start_date: ${start_date}</li>
          </ul>
      </div>

      <div style="padding-left: 10px;" className="action">
          <ul>
              <li style=" font-size: 20px;
      font-style: italic;">Age_12_plus: ${age_12_plus}</li>
          </ul>
      </div>
      <div style="padding-left: 10px;" className="action">
          <ul>
              <li style=" font-size: 20px;
      font-style: italic;">Age_2_12: ${age_2_12}</li>
          </ul>
      </div>
      <div style="padding-left: 10px;" className="action">
          <ul>
              <li style=" font-size: 20px;
      font-style: italic;">Age_6_2: ${age_6_2}</li>
          </ul>
      </div>
      <div style="padding-left: 10px;" className="action">
          <ul>
              <li style=" font-size: 20px;
      font-style: italic;">Home_type: ${home_type}</li>
          </ul>
      </div>
      <div style="padding-left: 10px;" className="action">
          <ul>
              <li style=" font-size: 20px;
      font-style: italic;">Komment: ${comments}</li>
          </ul>
      </div>

      <div style="padding-left: 10px;" className="action">
      <ul>
          <li style=" font-size: 20px;
      font-style: italic;">Convenient messenger: ${easy_message}</li>
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
