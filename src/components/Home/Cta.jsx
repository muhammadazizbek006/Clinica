import React from "react";

const Cta = () => {
  return (
    <div className="relative flex justify-center items-center h-full py-10">
      <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.7974454966748!2d71.97460797585151!3d40.87631917136938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca14b5018fdcb%3A0xedfc2c995d1b9641!2sWebKing!5e0!3m2!1sru!2s!4v1711367706184!5m2!1sru!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=" absolute w-full h-80 top-0 left-0"></iframe>
      {/* kontakt */}
      <div className="containerb z-40 hidden  md:block">
          <div className=" bg-white h-64 w-[562px] p-6 ">
            <h3 className="text-42  mb-8">Kontaktlar</h3>
            <address className="text-lg font-medium mb-6">620027 , Sverdlovsk viloyati, Ekaterinburg, Azina ko'chasi, 31</address>
            <p className="text-2xl font-medium">+998 91 475 06 12</p>
            <span className="text-base">Qo'ng'iroq bepul</span>
          </div>
      </div>
    </div>
  );
};

export default Cta
