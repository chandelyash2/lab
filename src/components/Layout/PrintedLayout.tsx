import Header from "./Header";
import { ReportDetailFields, TestTableHeader } from "@/constants/reportJson";
import { SampleFields } from "@/constants/Samples/sampleFields";
import PdfDownload from "../common/PdfDownload";

interface PrintedLayoutProps {
  selected: any;
}
const PrintedLayout: React.FC<PrintedLayoutProps> = ({ selected }) => {
  const selectedReport = SampleFields.filter((item) => item.key === selected);

  return (
    <div>
      <div
        className="m-6 absolute left-[25%] w-[50%] p-2 border-8 border-[#1f7fc3]"
        id="test"
      >
        <div className="flex flex-col">
          <Header />
          {selectedReport.length > 0 ? (
            <div aria-label="Report Content" className="flex flex-col gap-2">
              <div className="flex relative justify-center before:content-[''] before:absolute before:left-0 before:top-3 before:w-full before:h-1 before:bg-[#1f7fc3] before:z-0">
                <span className="bg-white relative px-3.5 font-bold text-xs ">
                  REPORT
                </span>
              </div>
              <div className="border p-4 border-black">
                <div className="grid grid-cols-2 gap-2 items-center">
                  {ReportDetailFields.map((item, i) => (
                    <span className="w-200px flex justify-between text" key={i}>
                      <span className="text-sm">{item}:</span>
                      <input placeholder="-" />
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className=" flex justify-center border w-full border-black p-2 font-bold text-sm">
                  CLINICAL BIOCHEMISTRY
                </span>
                <span className="flex justify-center border w-full border-black p-2 font-bold text-sm">
                  ASHA CLINIC
                </span>
              </div>
              <div
                aria-label="Units Div"
                className="grid grid-cols-4 py-2 border-b border-black text-center text-sm"
              >
                {TestTableHeader.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
              <div className="flex flex-col ">
                <span className="font-bold">{selectedReport[0].name}</span>
                {selectedReport[0].fields.map((item, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-4 py-1 text-center items-center "
                  >
                    <span className="text-sm">{item.name}</span>
                    <span>
                      <input placeholder="-" className="text-center" />
                    </span>
                    <span className="text-sm">{item.unit}</span>
                    <span className="text-sm">{item.bio}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <span className="font-bold">*** End Of Report ***</span>
              </div>
              <div className="flex flex-col items-end text-xs font-semibold text-left">
                <span>Lab Incharge </span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center font-bold text-xl">
              Report Not Found
            </div>
          )}
        </div>
        <p className="text-xs">
          Note: If the test results are alarming or unexpected,Client is advised
          to contact the laboratory immediately for possible remedial action.
        </p>
      </div>
      <div className="absolute top-4 right-[30%] bg-[#1f7fc3] p-2 text-white rounded-md">
        <PdfDownload rootElementId="test" />
      </div>
    </div>
  );
};

export default PrintedLayout;
