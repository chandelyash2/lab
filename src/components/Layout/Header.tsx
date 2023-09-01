/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src="/Logo2.png" alt="Logo" width={150} height={100} />
      <span className="text-3xl uppercase font-semibold text-center mb-8">
        Asha Diagnostic <br />
        Centre
      </span>
      <div className="flex flex-col text-sm ">
        <span>Opposite Cvil Hospital Nadaun </span>
        <span>Pincode 177033</span>
        <span>Regd No.:2429</span>
        <span>Phone:7018469906</span>
        <span>Email:kumarshubhi906@gmail.com</span>
      </div>
    </div>
  );
};

export default Header;
