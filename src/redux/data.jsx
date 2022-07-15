import axios from "axios";

const getPassword = async () => {
  try {
    const res = await axios("http://localhost:4500/users/");
    const data = res.data;
	let passObj = {};

    data.forEach((info) => {
      if (info.role === "admin") {
        const adminPw = info.password;
        //console.log("fullpw",adminPw);
        const passWp = String(adminPw).slice(0, 2);
        const passDg = String(adminPw).slice(2, 4);
        const passSg = String(adminPw).slice(4, 6);
        const passFw = String(adminPw).slice(6, 8);
        const passCp = String(adminPw).slice(8, 10);
        const passFn = String(adminPw).slice(10, 13);
        //console.log("weapon pass: ", passWp, "\nDrug pass: ", passDg, "\nStolenGoods pass: ", passSg, "\nFirewall pass: ", passFw, "\nCrypto pass: ", passCp, "\nFake news pass:", passFn);
        passObj = {
          weapon: passWp,
          drug: passDg,
          stolengoods: passSg,
          firewall: passFw,
          crypto: passCp,
          fakenews: passFn,
        };
        console.log(passObj);
       
      }
    });
	return passObj;
    /*
        const pass_fw
        const pass
        const pass5
        const pass6 */

/*     console.log("resultados", res); */
  } catch (error) {
    console.log("Error en petición", error);
  }
};

export default getPassword;
