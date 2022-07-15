import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeDrugsPass } from "../../../redux/password/password.actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./Drugs.scss";
import Swal from "sweetalert2";

const Drugs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [drugs, setDrugs] = useState([]);
  const [info, setInfo] = useState({});
  useEffect(() => {
    const getDrugs = async () => {
      try {
        const res = await axios("https://cima.aemps.es/cima/rest/psuministro");
        console.log(res);
        const { info, resultados } = res.data;
        setDrugs(resultados);
        setInfo(info);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getDrugs();
  }, []);

  const mystyle = {
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "VT323, monospace",
    color: "#1f1f1f",
  };
  const text = {
    color: " rgba(12, 128, 8, 0.8)",
  };

  const alert = () => {
    Swal.fire({
      title: "¡Conseguido! has encontrado parte de la contraseña",
      color: "#ffffff",
      confirmButtonColor: "#222",
      background:
        'url("https://c.tenor.com/-SV9TjUGabMAAAAC/hacker-python.gif") no-repeat',
    }).then((result) => {
      if (result.isConfirmed) {
        const cb = () => navigate("/main");
        dispatch(storeDrugsPass(cb));
        console.log("confirmado");
      }
    });
  };

  return (
    <>
      <body style={mystyle}>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap"
          rel="stylesheet"
        ></link>
        <div id="showScroll" class="container-drugs">
          <div class="receipt">
            <h1 class="logo">stolen drugs pharmacy</h1>
            <div class="address">
              En este ticket se encuentra la siguiente pista, busca bien 👀.
              ¡Buena suerte!
            </div>
            <div class="transactionDetails">
              <div class="detail">Reg#17</div>
              <div class="detail">TRN#1313</div>
              <div class="detail">CSHR#00097655</div>
              <div class="detail">str#9852</div>
            </div>
            <div class="transactionDetails">Helped by: Garrett</div>
            <div class="centerItem bold">
              <div class="item">ExtraCare Card #: *********1875</div>
            </div>
            <div class="transactionDetails">
              {drugs.map((drug) => {
                return (
                  <div className="drugs" key={drug}>
                    <div class="detail">
                      <b>nombre :</b> {drug.nombre}{" "}
                    </div>
                    <div class="detail">
                      {" "}
                      <b>precio :</b>{" "}
                      {drug.tipoProblemaSuministro < 10 ? (
                        <span style={text}>
                          oferta {drug.tipoProblemaSuministro}{" "}
                        </span>
                      ) : (
                        <>{drug.tipoProblemaSuministro}</>
                      )}{" "}
                      ETH
                    </div>
                    <div class="detail">
                      {" "}
                      <b>stock :</b> {drug.ffin} uds
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
            <div class="transactionDetails">
              <div class="detail">2</div>
              <div class="detail">Milk Duds</div>
              <div class="detail">2.99</div>
            </div>
            <div class="survey bold">
              <p>Survey ID #</p>
              <p class="surveyID">6588 4755 3256 544 21</p>
            </div>
            <div class="paymentDetails bold">
              <div class="detail">TOTAL</div>
              <div class="detail">9.97</div>
            </div>
            <div class="paymentDetails">
              <div class="detail">CHARGE</div>
              <div class="detail">9.97</div>
            </div>
            <div class="paymentDetails">
              <div class="detail">************4023</div>
              <div class="detail">CH</div>
            </div>
            <div class="creditDetails">
              <p>VISA CREDIT &nbsp;&nbsp;&nbsp;&nbsp; ****************</p>
              <p>approved# 09773B</p>
              <p>ref# 013589</p>
              <p>tran type: SALE</p>
              <p>AID: 30000000090755</p>
              <p>TC: B7A2A4044AEE380A4</p>
              <p>terminal: 69010003</p>
              <p>no signature required</p>
              <p>CVM: 1e0300</p>
              <p>TMR(95): 0080081111</p>
              <p>TS(9B): E900</p>
            </div>
            <div class="paymentDetails">
              <div class="detail">CHANGE</div>
              <div class="detail">.00</div>
            </div>

            <div class="returnPolicy bold">
              Returns with receipt, subject to CVS Return Policy, thru
              12/04/2019
            </div>
            <div class="returnPolicy">
              <div class="detail">{Date()}</div>
            </div>
            <div class="tripSummary">
              <div class="bold">Trip Summary:</div>
              <div class="item">
                <div>Today You Saved:</div>
                <div>.00</div>
              </div>
              <div class="item">
                <div>Savings Value</div>
                <div>0%</div>
              </div>
            </div>
            <div class="feedback">
              <div class="break">***************************</div>
              <p class="center">
                We would love to hear your feedback on your recent experience
                with us. This survey will only take 1 minute to complete.
              </p>
              <h3 class="clickBait">Share Your Feedback</h3>
              <h4 class="web">www.CVSHealthSurvey.com</h4>
            </div>
            <div id="coupons" class="coupons">
              <div class="couponContainer">
                <h1 class="logo">CVS/pharmacy</h1>
                <div class="discount">$2.00 off</div>
                <div class="discountDetails">
                  $2.00 off COLEGATE Toothbrush, Toothpaste, or Mouthwash
                </div>
                <div class="expiration">
                  <div class="item bold">Expires 12/12/2019</div>
                  <div class="item">Up to $2 Value</div>
                </div>
                <div class="barcode">
                  <button class="noselect" onClick={alert}>
                    200391290
                  </button>
                </div>
                <div class="barcodeID center"></div>
                <div class="legal center">
                  ExtraCare card required. Excludes lottery, money orders,
                  postage stamps, milk, prescriptions, pre-paid cards, gift
                  cards, pseudoephedrine products, other fees, deposits, taxes,
                  alcohol and local exclusions. No cash back. Tax charged on
                  pre-coupon price where required. Limit of one purchase-based
                  coupon, i.e., $4 off $20 purchase, per transaction. Not valid
                  in specialty centers within CVS.
                </div>
                <div class="couponBottom">
                  <p>ExtraCare Card #: *7140 00130030598777</p>
                  <p>CPN#: 85887</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Drugs;
