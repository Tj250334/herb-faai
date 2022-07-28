import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: FiShoppingBag,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "orders",
        icon: AiOutlineShoppingCart,
      },
      {
        name: "employees",
        icon: IoMdContacts,
      },
      {
        name: "customers",
        icon: RiContactsLine,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: AiOutlineCalendar,
      },
      {
        name: "kanban",
        icon: BsKanban,
      },
      {
        name: "editor",
        icon: FiEdit,
      },
      {
        name: "color-picker",
        icon: BiColorFill,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: AiOutlineStock,
      },
      {
        name: "area",
        icon: AiOutlineAreaChart,
      },

      {
        name: "bar",
        icon: AiOutlineBarChart,
      },
      {
        name: "pie",
        icon: FiPieChart,
      },
      {
        name: "financial",
        icon: RiStockLine,
      },
      {
        name: "color-mapping",
        icon: BsBarChart,
      },
      {
        name: "pyramid",
        icon: GiLouvrePyramid,
      },
      {
        name: "stacked",
        icon: AiOutlineBarChart,
      },
    ],
  },
];

export const herbNames = [
  {
    id: 1,
    herb_id: 159,
    category_id: 0,
    name: "ฟ้าทะลาย",
    reference: "",
  },
  {
    id: 2,
    herb_id: 159,
    category_id: 0,
    name: "ฟ้าทะลายโจร",
    reference: "",
  },
  {
    id: 3,
    herb_id: 159,
    category_id: 1,
    name: "Creat",
    reference: "",
  },
  {
    id: 4,
    herb_id: 159,
    category_id: 1,
    name: "Kariyat",
    reference: "",
  },
  {
    id: 5,
    herb_id: 159,
    category_id: 1,
    name: "Indian Echinacea",
    reference: "",
  },
  {
    id: 6,
    herb_id: 159,
    category_id: 2,
    name: "Andrographis paniculata  (Burm.f.) Wall. ex Nees",
    reference: "",
  },
  {
    id: 7,
    herb_id: 159,
    category_id: 3,
    name: "Andrographis paniculata var. glandulosa Trimen",
    reference: "",
  },
  {
    id: 8,
    herb_id: 159,
    category_id: 3,
    name: "Justicia latebrosa Russell ex Wall.",
    reference: "",
  },
  {
    id: 9,
    herb_id: 159,
    category_id: 3,
    name: "Justicia paniculata Burm.f.",
    reference: "",
  },
  {
    id: 10,
    herb_id: 159,
    category_id: 4,
    name: "Acanthaceae",
    reference: "",
  },
  {
    id: 11,
    herb_id: 159,
    category_id: 5,
    name: "ซีปังฮี",
    reference: "",
  },
  {
    id: 12,
    herb_id: 159,
    category_id: 5,
    name: "หญ้ากันงู",
    reference: "",
  },
  {
    id: 13,
    herb_id: 159,
    category_id: 5,
    name: "น้ำลายพังพอน",
    reference: "",
  },
];

export const herbNameTypes = [
  "Thai name",
  "Common name",
  "Scientific name",
  "Synonym",
  "Family name",
  "Vernacular name",
];

export const herbs = [
  { id: 1, name: "กระชาย" },
  { id: 2, name: "กระดอม" },
  { id: 3, name: "กระดังงา" },
  { id: 4, name: "กระดาดขาว" },
  { id: 5, name: "กระดาดแดง" },
  { id: 6, name: "กระเทียม" },
  { id: 7, name: "กระเทียมทอก" },
  { id: 8, name: "กระเบา" },
  { id: 9, name: "กระพังโหม" },
  { id: 10, name: "กระลำพัก" },
  { id: 11, name: "กระวาน" },
  { id: 12, name: "กฤษณา" },
  { id: 13, name: "กลอย" },
  { id: 14, name: "กะทือ" },
  { id: 15, name: "กะเพรา" },
  { id: 16, name: "กัญชา" },
  { id: 17, name: "กันเกรา" },
  { id: 18, name: "ก้างปลาขาว" },
  { id: 19, name: "ก้างปลาแดง" },
  { id: 20, name: "กานพลู" },
  { id: 21, name: "การบูร" },
  { id: 22, name: "กำมะถันเหลือง" },
  { id: 23, name: "กำยาน" },
  { id: 24, name: "กำลังวัวเถลิง" },
  { id: 25, name: "กุ่มน้ำ" },
  { id: 26, name: "กุ่มบก" },
  { id: 27, name: "เกลือ" },
  { id: 28, name: "เกลือสินเธาว์" },
  { id: 29, name: "แกแล" },
  { id: 30, name: "โกฐกระดูก" },
  { id: 31, name: "โกฐก้านพร้าว" },
  { id: 32, name: "โกฐเขมา" },
  { id: 33, name: "โกฐจุฬาลัมพา" },
  { id: 34, name: "โกฐชฎามังสี" },
  { id: 35, name: "โกฐเชียง" },
  { id: 36, name: "โกฐน้ำเต้า" },
  { id: 37, name: "โกฐบัว" },
  { id: 38, name: "โกฐพุงปลา" },
  { id: 39, name: "โกฐสอ" },
  { id: 40, name: "โกฐสอเทศ" },
  { id: 41, name: "โกฐหัวบัว" },
  { id: 42, name: "ขนุน" },
  { id: 43, name: "ขนุนละมุด" },
  { id: 44, name: "ขมิ้นอ้อย" },
  { id: 45, name: "ขอนดอก" },
  { id: 46, name: "ขอบชะนางขาว" },
  { id: 47, name: "ขอบชะนางแดง" },
  { id: 48, name: "ขัดมอน" },
  { id: 49, name: "ขันทองพยาบาท" },
  { id: 50, name: "ข่า" },
  { id: 51, name: "ข้าวเย็น" },
  { id: 52, name: "ข้าวเย็นใต้" },
  { id: 53, name: "ข้าวเย็นเหนือ" },
  { id: 54, name: "ขิง" },
  { id: 55, name: "ขี้กาขาว" },
  { id: 56, name: "ขี้เหล็ก" },
  { id: 57, name: "คนทา" },
  { id: 58, name: "ครอบตลับ" },
  { id: 59, name: "คล้า" },
  { id: 60, name: "คันทรง" },
  { id: 61, name: "คำไทย" },
  { id: 62, name: "โคกกระสุน" },
  { id: 63, name: "โคกกระออม" },
  { id: 64, name: "ไคร้หางนาค" },
  { id: 65, name: "จวง" },
  { id: 66, name: "จันทน์ขาว" },
  { id: 67, name: "จันทน์แดง" },
  { id: 68, name: "จันทน์เทศ" },
  { id: 69, name: "จำปา" },
  { id: 70, name: "จิกนา" },
  { id: 71, name: "จิงจ้อ" },
  { id: 72, name: "จุกกก" },
  { id: 73, name: "จุกโรหินี" },
  { id: 74, name: "จุณขี้เหล็ก" },
  { id: 75, name: "เจตพังคี" },
  { id: 76, name: "เจตมูลเพลิงแดง" },
  { id: 77, name: "ชะพลู" },
  { id: 78, name: "ชะเอมเทศ" },
  { id: 79, name: "ชะเอมไทย" },
  { id: 80, name: "ชิงชี่" },
  { id: 81, name: "ชุมเห็ดเทศ" },
  { id: 82, name: "ชุมเห็ดไทย" },
  { id: 83, name: "ดอกจันทน์" },
  { id: 84, name: "ดองดึง" },
  { id: 85, name: "ดินประสิว" },
  { id: 86, name: "ดินประสิวขาว" },
  { id: 87, name: "ดีงูต้น" },
  { id: 88, name: "ดีปลี" },
  { id: 89, name: "ตะไคร้" },
  { id: 90, name: "ตะไคร้หางนาค" },
  { id: 91, name: "ตานขโมย" },
  { id: 92, name: "ตานดำ" },
  { id: 93, name: "ตานเสี้ยน" },
  { id: 94, name: "ตานหม่อน" },
  { id: 95, name: "ตาล" },
  { id: 96, name: "ตาลโตนด" },
  { id: 97, name: "เต่าเกียด" },
  { id: 98, name: "เต่านา" },
  { id: 99, name: "เถาวัลย์เปรียง" },
  { id: 100, name: "เถาวัลย์เหล็ก" },
  { id: 101, name: "ทองพันชั่ง" },
  { id: 102, name: "ทับทิม" },
  { id: 103, name: "เทียนขาว" },
  { id: 104, name: "เทียนข้าวเปลือก" },
  { id: 105, name: "เทียนดำ" },
  { id: 106, name: "เทียนแดง" },
  { id: 107, name: "เทียนตาตั๊กแตน" },
  { id: 108, name: "เทียนเยาวพาณี" },
  { id: 109, name: "เทียนสัตตบุษย์" },
  { id: 110, name: "ไทรย้อย" },
  { id: 111, name: "น้ำตาลทราย" },
  { id: 112, name: "น้ำเต้า" },
  { id: 113, name: "น้ำนมราชสีห์" },
  { id: 114, name: "น้ำผึ้ง" },
  { id: 115, name: "น้ำมันงา" },
  { id: 116, name: "น้ำมันยางนา" },
  { id: 117, name: "เนระพูสี" },
  { id: 118, name: "บอนแดง" },
  { id: 119, name: "บอระเพ็ด" },
  { id: 120, name: "บัว" },
  { id: 121, name: "บัวขม" },
  { id: 122, name: "บัวขาว" },
  { id: 123, name: "บัวจงกลนี" },
  { id: 124, name: "บัวแดง" },
  { id: 125, name: "บัวนิลุบล" },
  { id: 126, name: "บัวเผื่อน" },
  { id: 127, name: "บัวลินจง" },
  { id: 128, name: "บัวสัตตบรรณ" },
  { id: 129, name: "บัวสัตตบุษย์" },
  { id: 130, name: "บัวหลวง" },
  { id: 131, name: "บุก" },
  { id: 132, name: "บุกคางคก" },
  { id: 133, name: "บุกรอ" },
  { id: 134, name: "บุนนาค" },
  { id: 135, name: "เบญกานี" },
  { id: 136, name: "ใบเงิน" },
  { id: 137, name: "ใบทอง" },
  { id: 138, name: "ปูนขาว" },
  { id: 139, name: "เปราะหอม" },
  { id: 140, name: "เปล้าน้อย" },
  { id: 141, name: "เปล้าใหญ่" },
  { id: 142, name: "ผักกระโฉม" },
  { id: 143, name: "ผักเบี้ยใหญ่" },
  { id: 144, name: "ผักแพวแดง" },
  { id: 145, name: "ผักเสี้ยนผี" },
  { id: 146, name: "ผักหวานบ้าน" },
  { id: 147, name: "ไผ่ป่า" },
  { id: 148, name: "ฝาง" },
  { id: 149, name: "ฝางเสน" },
  { id: 150, name: "แฝกหอม" },
  { id: 151, name: "พญามือเหล็ก" },
  { id: 152, name: "พริกไทย" },
  { id: 153, name: "พริกไทยล่อน" },
  { id: 154, name: "พิกุล" },
  { id: 155, name: "พิมเสนต้น" },
  { id: 156, name: "โพคาน" },
  { id: 157, name: "ไพล" },
  { id: 158, name: "ฟางข้าวเหนียว" },
  { id: 159, name: "ฟ้าทะลายโจน" },
  { id: 160, name: "มวกขาว" },
  { id: 161, name: "มวกแดง" },
  { id: 162, name: "มหาหิงค์" },
  { id: 163, name: "มะกรูด" },
  { id: 164, name: "มะกล่ำเครือ" },
  { id: 165, name: "มะกา" },
  { id: 166, name: "มะขาม" },
  { id: 167, name: "มะขามป้อม" },
  { id: 168, name: "มะขามเปียก" },
  { id: 169, name: "มะแขว่น" },
  { id: 170, name: "มะดูก" },
  { id: 171, name: "มะเดื่ออุทุมพร" },
  { id: 172, name: "มะตูม" },
  { id: 173, name: "มะนาว" },
  { id: 174, name: "มะพร้าว" },
  { id: 175, name: "มะพร้าวไฟ" },
  { id: 176, name: "มะเฟือง" },
  { id: 177, name: "มะยมผี" },
  { id: 178, name: "มะลิ" },
  { id: 179, name: "มะแว้งเครือ" },
  { id: 180, name: "มะแว้งต้น" },
  { id: 181, name: "มะหาด" },
];

export const chem = [
  {id:1, name:"Andrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:2, name:"Andrograpanin", cas:"", mf:"", mw:"", xref:""},
  {id:3, name:"Andropanoside", cas:"", mf:"", mw:"", xref:""},
  {id:4, name:"14-deoxy-12-methoxy-andrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:5, name:"14-epi-andrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:6, name:"isoandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:7, name:"12-epi-14-deoxy-12-methoxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:8, name:"14-deoxy-12-hydroxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:9, name:"14-deoxy-11-hydroxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:10, name:"14-deoxy-11, 12-didehydroandrographiside", cas:"", mf:"", mw:"", xref:""},
  {id:11, name:"6'-acetylneoandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:12, name:"bis-andrograpolides A", cas:"", mf:"", mw:"", xref:""},
  {id:13, name:"bis-andrograpolides B", cas:"", mf:"", mw:"", xref:""},
  {id:14, name:"bis-andrograpolides C", cas:"", mf:"", mw:"", xref:""},
  {id:15, name:"bis-andrograpolides D", cas:"", mf:"", mw:"", xref:""},
  {id:16, name:"14-deoxy-11,12-didehydroandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:17, name:"4-deoxy-15-methoxy-andrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:18, name:"3-deoxy-andrographoside", cas:"", mf:"", mw:"", xref:""},
  {id:19, name:"bis-andrograpolides E", cas:"", mf:"", mw:"", xref:""},
  {id:20, name:"bis-andrograpolides F", cas:"", mf:"", mw:"", xref:""},
  {id:21, name:"3-O-beta-D-glucopyranosyl-14,19-dideoxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:22, name:"14-deoxy-17-hydroxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:23, name:"19-O-[beta-D-apiofuranosyl(1-->2)-beta-D-glucopyranoyl]-3,14-dideoxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:24, name:"3-O-beta-d-glucopyranosylandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:25, name:"12S-hydroxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:26, name:"andrographatoside", cas:"", mf:"", mw:"", xref:""},
  {id:27, name:"7 R-hydroxy-14-deoxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:28, name:"7 S-hydroxy-14-deoxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:29, name:"12 S,13 S-hydroxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:30, name:"12 R,13 R-hydroxyandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:31, name:"19-hydroxy-3-oxo-ent-labda-8(17),11,13-trien-16,15-olide", cas:"", mf:"", mw:"", xref:""},
  {id:32, name:"3,18,19-trihydroxy-ent-labda-8(17),13-dien-16,15-olide", cas:"", mf:"", mw:"", xref:""},
  {id:33, name:"3,19-dihydroxy-ent-labda-8(17),12-dien-16,15-olide", cas:"", mf:"", mw:"", xref:""},
  {id:34, name:"19-[(b-D-glucopyranosyl)oxy]-19-oxo-ent-labda-8(17),13-dien-16,15-olide", cas:"", mf:"", mw:"", xref:""},
  {id:35, name:"3,19-dihydroxy-15-methoxy-ent-labda-8(17),11,13-trien-16,15-olide", cas:"", mf:"", mw:"", xref:""},
  {id:36, name:"ent-labda-8(17),13-diene-15,16,19-triol", cas:"", mf:"", mw:"", xref:""},
  {id:37, name:"3,15,19-trihydroxy-ent-labda-8(17),13-dien-16-oicacid", cas:"", mf:"", mw:"", xref:""},
  {id:38, name:"3,19-dihydroxy-14,15,16-trinor-ent-labda-8(17),11-dien-13-oic acid", cas:"", mf:"", mw:"", xref:""},
  {id:39, name:"13,14,15,16-tetranor-ent-labd-8(17)-ene-3,12,19-triol", cas:"", mf:"", mw:"", xref:""},
  {id:40, name:"neoandrographolide", cas:"", mf:"", mw:"", xref:""},
  {id:41, name:"5-Hydroxy-7,8,2′,6′-tetramethoxyflavone", cas:"", mf:"", mw:"", xref:""},
  {id:42, name:"Apigenin-7, 4′-dimethylether", cas:"", mf:"", mw:"", xref:""},
] 













































