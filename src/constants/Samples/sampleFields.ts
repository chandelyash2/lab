export const SampleFields = [
  {
    key: "LFT",
    name: "Liver Fuction Test (LFT)",
    fields: [
      {
        name: "Bilirubin Total",
        unit: "mg/dL",
        bio: "0.2-1.2",
        // method: "Diazonium Salt",
      },
      {
        name: "Bilirubin Direct",
        unit: "mg/dL",
        bio: "0-10.5",
        // method: "Diazo Reaction",
      },
      {
        name: "Bilirubin Indirect",
        unit: "mg/dL",
        bio: "0.2-1.0",
        // method: "Calculated",
      },
      {
        name: "Alkaline Phosphatase (ALP)",
        unit: "U/L",
        bio: "40-150",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Aspartate Aminotransferase (SGOT)",
        unit: "U/L",
        bio: "5-34",
        // method: "NADH w/0 P-5'-P",
      },
      {
        name: "Alanine Transaminase (ALT/SGPT)",
        unit: "U/L",
        bio: "0-55",
        // method: "NADH w/o P-5’-P",
      },
      {
        name: "Gamma Glutamyl Transferase (GGT)",
        unit: "U/L",
        bio: "9-36",
        // method: "L-g-g-3-Carboxy- 4-Nitroanilide subs",
      },
      {
        name: "Protein Total",
        unit: "g/dL",
        bio: "6.4-8.3",
        // method: "Biuret",
      },
      {
        name: "Albumin",
        unit: "g/dL",
        bio: "3.5-5.2",
        // method: "Bromcresol Green",
      },
      {
        name: "Globulin",
        unit: "g/dL",
        bio: "2.5-3.8",
        // method: "Calculated",
      },
      {
        name: "Albumin / Globulin Ratio",
        unit: "",
        bio: "1.0-2.1",
        // method: "Calculated",
      },
    ],
  },
  {
    key: "WB-EDTA",
    name: "WB-EDTA",
    fields: [
      {
        name: "Haemoglobin",
        unit: "g/dL",
        bio: "0.2-1.2",
        // method: "Diazonium Salt",
      },
      {
        name: "RBC Count",
        unit: "10^12/L",
        bio: "4.5-5.5",
        // method: "Diazo Reaction",
      },
      {
        name: "Haematocrit (HCT)",
        unit: "%",
        bio: "45-50",
        // method: "Calculated",
      },
      {
        name: "MCV",
        unit: "fl",
        bio: "81-101",
        // method: "NADH w/0 P-5'-P",
      },
      {
        name: "MCH",
        unit: "pg",
        bio: "27-32",
        // method: "NADH w/o P-5’-P",
      },
      {
        name: "MCHC",
        unit: "g/dL",
        bio: "31.5-34.5",
        // method: "L-g-g-3-Carboxy- 4-Nitroanilide subs",
      },
      {
        name: "RDW-CV",
        unit: "%",
        bio: "11.6-14.0",
        // method: "Biuret",
      },
      {
        name: "Platelet Count",
        unit: "10^9/L",
        bio: "150-4102",
        // method: "Bromcresol Green",
      },
      {
        name: "WBC count, Tota",
        unit: "10^9/L",
        bio: "4.0-10.0",
        // method: "Calculated",
      },
      {
        name: "Neutrophils",
        unit: "%",
        bio: "40-70",
        // method: "Calculated",
      },
      {
        name: "Neutrophil-Absolute Count",
        unit: "10^9/L",
        bio: "2.0-7.0",
        // method: "Calculated",
      },
      {
        name: "Lymphocytes",
        unit: "%",
        bio: "20-40",
        // method: "Calculated",
      },
      {
        name: "Lymphocytes-Absolute Count",
        unit: "10^9/L",
        bio: "1.0-3.0",
        // method: "Calculated",
      },
      {
        name: "Monocytes",
        unit: "%",
        bio: "2-10",
        // method: "Calculated",
      },
      {
        name: "Monocytes-Absolute Count",
        unit: "10^9/L",
        bio: "0.2-1.0",
        // method: "Calculated",
      },
      {
        name: "Eosinophils",
        unit: "%",
        bio: "1-6",
        // method: "Calculated",
      },
      {
        name: "Eosinophils-Absolute Count",
        unit: "10^9/L",
        bio: "0.02-0.5",
        // method: "Calculated",
      },
      {
        name: "Basophils",
        unit: "%",
        bio: "0-2",
        // method: "Calculated",
      },
      {
        name: "Basophils-Absolute Count",
        unit: "10^9/L",
        bio: "0.0-0.3",
        // method: "Calculated",
      },
      {
        name: "Others",
        unit: "%",
        bio: "00",
        // method: "Calculated",
      },
    ],
  },
  {
    key: "eGFR",
    name: "eGFR (estimated Glomerular Filtration Rate) - Serum",
    fields: [
      {
        name: "Albumin",
        unit: "g/dL",
        bio: "3.5-5.2",
        // method: "Diazonium Salt",
      },
      {
        name: "Creatinine",
        unit: "mg/dL",
        bio: "0.7-1.3",
        // method: "Diazo Reaction",
      },
      {
        name: "Blood Urea Nitrogen (BUN)",
        unit: "mg/dL",
        bio: "8.9-20.6",
        // method: "Calculated",
      },
      {
        name: "Alkaline Phosphatase (ALP)",
        unit: "U/L",
        bio: "40-150",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "GFR by MDRD Formula",
        unit: "mL/min/1.73m2 ",
        bio: "74 - 138",
        // method: "NADH w/0 P-5'-P",
      },
    ],
  },
  {
    key: "KFT",
    name: "Kidney Function Test (KFT) - I",
    fields: [
      {
        name: "Creatinine",
        unit: "mg/dL",
        bio: "0.7-1.3",
        // method: "Diazonium Salt",
      },
      {
        name: "Urea",
        unit: "mg/dL",
        bio: "19.0-44.0",
        // method: "Diazo Reaction",
      },
      {
        name: "Uric Acid",
        unit: "mg/dL",
        bio: "3.5-7.2",
        // method: "Calculated",
      },
      {
        name: "Sodium (Na)",
        unit: "mmol/L",
        bio: "135-145",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Potassium (K)",
        unit: "mmol/L",
        bio: "3.8 - 5.2",
        // method: "NADH w/0 P-5'-P",
      },
      {
        name: "Chloride(CL)",
        unit: "mmol/L",
        bio: "98-108",
        // method: "NADH w/o P-5’-P",
      },
    ],
  },
  {
    key: "Lipid Profile",
    name: "Lipid Profile",
    fields: [
      {
        name: "Cholesterol Tota",
        unit: "mg/dL",
        bio: "Adult: Desirable<200 mg/dL, Borderline: 200 – 239 mg/dL,  High:>240 mg/dL",
        // method: "Diazonium Salt",
      },
      {
        name: "Cholesterol HDL",
        unit: "mg/dL",
        bio: "40 - 60",
        // method: "Diazo Reaction",
      },
      {
        name: "Cholesterol - LDL",
        unit: "mg/dL",
        bio: "<100 Optimal",
        // method: "Calculated",
      },
      {
        name: "Cholesterol VLDL",
        unit: "mg/dL",
        bio: "7-40",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Non-HDL cholesterol",
        unit: "mg/dL",
        bio: "Optimal < 130",
        // method: "NADH w/0 P-5'-P",
      },
      {
        name: "Triglycerides",
        unit: "mg/dL",
        bio: "Normal: < 150~Borderline High: 150 to 199~ High: 200 to 499~Very High >= 500",
        // method: "NADH w/o P-5’-P",
      },
      {
        name: "Cholesterol Total/Cholesterol HDL Ratio",
        unit: "",
        bio: "0-4.0",
        // method: "NADH w/0 P-5'-P",
      },
      {
        name: "Cholesterol LDL/Cholesterol HDL",
        unit: "mg/dL",
        bio: "0-3.5",
        // method: "NADH w/0 P-5'-P",
      },
    ],
  },
  {
    key: "Thyroid Profile I",
    name: "Thyroid Profile I",
    fields: [
      {
        name: "Tri-Iodothyronine Total (TT3)",
        unit: "ng/dL",
        bio: "35-193",
        // method: "Diazonium Salt",
      },
      {
        name: "Thyroxine - Total (TT4)",
        unit: "μg/dL",
        bio: "4.87–11.72",
        // method: "Diazo Reaction",
      },
      {
        name: "ThyroidStimulatingHormone(TSH)",
        unit: "μIU/mL",
        bio: "0.35–4.94(Testperformedon4th CMIA Generation TSH kit)",
        // method: "Calculated",
      },
      {
        name: "Cholesterol VLDL",
        unit: "mg/dL",
        bio: "7-40",
        // method: "Para-Nitrophenyl-phospahate",
      },
    ],
  },
  {
    key: "CUE",
    name: "Complete Urine Analysis (CUE)",
    fields: [
      {
        name: "Colour",
        unit: "-",
        bio: "Straw to light amber",
        // method: "Diazonium Salt",
      },
      {
        name: "Appearence",
        unit: "-",
        bio: "Clear",
        // method: "Diazo Reaction",
      },
      {
        name: "Glucose",
        unit: "-",
        bio: "Negative",
        // method: "Calculated",
      },
      {
        name: "Protein",
        unit: "-",
        bio: "Negative",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Bilirubin (Bile)",
        unit: "-",
        bio: "Negative",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Ketone Bodies",
        unit: "-",
        bio: "Negative",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Specific gravity",
        unit: "-",
        bio: "1.001 - 1.035",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Blood",
        unit: "-",
        bio: "Negative",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Reaction (pH)",
        unit: "-",
        bio: "4.6-8.0",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Nitrites",
        unit: "-",
        bio: "Negative",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Leukocytes",
        unit: "-",
        bio: "Negative",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "PUS(WBC) Cells",
        unit: "/hpf",
        bio: "00-05",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Red Blood Cells",
        unit: "/hpf",
        bio: "Absent",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "U.Epithelial Cells",
        unit: "/hpf",
        bio: "00-05",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Casts",
        unit: "/hpf",
        bio: "Occasional Hyaline cast",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Crystals",
        unit: "/hpf",
        bio: "Absent",
        // method: "Para-Nitrophenyl-phospahate",
      },
      {
        name: "Others",
        unit: "/hpf",
        bio: "Absent",
        // method: "Para-Nitrophenyl-phospahate",
      },
    ],
  },
];
