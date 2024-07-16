import React from "react";
import CashIn from "../Pages/CashIn/CashIn";
import CashOut from "../Pages/CashOut/CashOut";
import SendMoney from "../Pages/SendMoney/SendMoney";
import Transaction from "../Pages/Transaction/Transaction";

function Modal() {
  return (
    <div>
      <dialog id="cash_in" className="modal">
        <div className="modal-box">
          <CashIn />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="cash_out" className="modal">
        <div className="modal-box">
          <CashOut />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="send_money" className="modal">
        <div className="modal-box">
          <SendMoney />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="transaction" className="modal">
        <div className="modal-box">
          <Transaction />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
