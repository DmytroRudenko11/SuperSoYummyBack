const { FRONTEND_URL } = process.env;

const createMessage = (name, id) => {
  return `<div style="max-width: 400px; margin: 0 auto; text-align: center;">
    <h2 style="font-size: 24px; color: #8BAA36; margin-bottom: 10px;">Welcome to Our SoYummy Newsletter!</h2>
    <p style="font-size: 16px; color: #666; margin-bottom: 10px;">Dear, <strong>${name}</strong>, stay up-to-date with the latest delicious recipes and cooking tips!</p>
    <p style="font-size: 14px; color: #999; margin-bottom: 10px;">Our newsletter delivers mouthwatering recipes straight to your inbox, along with cooking hacks, ingredient spotlights, and more.</p>
     <img src="https://img.freepik.com/free-photo/traditional-ukrainian-russian-borscht-red-soup-bowl-top-view_2829-11970.jpg?w=1060&t=st=1685653522~exp=1685654122~hmac=ec07c943c8101a6f23850227d12f0a2aae1b76d327e858efddacf438f7d36308" alt="SoYummy" style="max-width: 100%; margin-bottom: 20px; border-radius: 8px">
    <p style="font-size: 16px; color: #333; margin-bottom: 10px;">Now you will never miss a tasty update.</p>
    <a target="_blank" href="#"> <button style="padding: 10px 20px; font-size: 16px; font-weight: bold; color: #fff; background-color: #8BAA36; border: none; border-radius: 24px 44px; cursor: pointer;">Bon Appétit</button>
    </a>
    <p style="margin-top: 15px; text-align: center;">Thanks for subscription,<br>
    The SoYummy team</p>
     </div>
     <p style="font-size: 8px" color: #D3D3D3;">If don't want to recieve our newsletters, <a href="${FRONTEND_URL}/unsubscription/${id}">click here</a></p>
    `;
};

module.exports = createMessage;
