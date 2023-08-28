/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src="/Logo2.png" alt="Logo" width={100} height={100} />
      <div className="flex flex-col text-sm ">
        <span className="font-bold">Asha Diagnostic Centre</span>
        <span>Opposite Cvil Hospital Nadaun </span>
        <span>Pincode 177033</span>
        <span>Registration Number:2429</span>
        <span>Email:kumarshubhi906@gmail.com</span>
      </div>
    </div>
  );
};

export default Header;
