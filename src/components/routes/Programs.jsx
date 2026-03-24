import React from "react";
import CardChip from "../../assets/CardChip.png";

const Program = () => {
  return (
    <div className="h-[90vh] flex justify-around items-center flex-wrap">
      <section className="flex flex-col gap-6 text-2xl w-2xl px-8 py-8 rounded-3xl bg-custom-dark-blue text-custom-white">
        <h3 className="text-5xl self-end">Student Card</h3>
        <img className="w-25" src={CardChip} />
        <h2 className="text-4xl">0000 0000 0000 0000 0000</h2>
        <div className="flex justify-between">
          <p>No name informed</p>
          <p>-- / --</p>
        </div>
      </section>
      <form className="flex w-1/3 flex-col gap-8 px-8 py-8 font-semibold bg-custom-modified-light-blue rounded-3xl">
        <h3 className="font-bold text-4xl mb-6 self-center">Create your Student Card</h3>
        <div className="flex flex-col text-3xl gap-16">
          <div className="flex flex-col gap-6">
            <label htmlFor="name">Your full name:</label>
            <input
              type="text"
              name="name"
              className="border-b-4 border-custom-white font-normal text-2xl"
            />
          </div>
          <div className="flex flex-col gap-6">
            <label htmlFor="card-number">Your card number:</label>
            <input
              type="number"
              name="card-nmber"
              className="border-b-4 border-custom-white font-normal"
            />
          </div>
          <div className="flex flex-col gap-6">
            <label htmlFor="expiring-date">Expiring date:</label>
            <div className="flex gap-4 text-2xl">
              <input
                type="text"
                className="border-b-4 border-custom-white font-normal w-8"
              />
              <p>/</p>
              <input
                type="text"
                className="border-b-4 border-custom-white font-normal w-8"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-custom-dark-blue text-custom-white py-4 px-24 text-2xl rounded-2xl hover:bg-custom-modified-dark-blue hover:text-custom-light-blue transition duration-400 cursor-pointer">Validate</button>
        </div>
      </form>
    </div>
  );
};

export default Program;
