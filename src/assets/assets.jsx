import eyeIcon from './Group 2.svg'
import dashed from './dashed.png'
import checkLady from './cheching eye lady.png'
import childGirl from './childGirl.png'
import boyCheck from './boyCheck.png'
import ladyDoctor from './ladyshortdoctor.png'
import greenEye from './greeneye.svg'
import specLady from './ladyspecs.jpeg'
import mensEye from './menspecs.png'
import kidsSPecs from './kidspecs.jpeg'
import checkSpecs from './checkspecs.png'
import checkingLady from './checkinglady.png'
import surgeryPic from './surgerypic.png'
import grandDr from './granddoctor.jpeg'
import ladyDr from './ladydoctor.jpeg'
import firstdr from './firtsmaledr.jpeg'
import secondDr from './secondmaledr.jpeg'
import thirdDr from './thirdmaledr.jpeg'
import fourthDr from './fourthmaledr.jpeg'
import ambulance from './ambu.png'
import optometry from './Optometry.jpeg'
// import Opthalmic from './ophthalmic.jpeg'
import testingDr from './testingdr.jpeg'
import womanDoctorWhite from './womandoctorwhite.jpg'
import horizontalMan from './horizontalmen.png'
import { FaEye, FaRegEye } from 'react-icons/fa'
import printSpecs from './printspecs.png'

export const assets = {
  eyeIcon,
  dashed,
  checkLady,
  childGirl,
  boyCheck,
  ladyDoctor,
  greenEye,
  specLady,
  mensEye,
  kidsSPecs,
  checkSpecs,
  checkingLady,
  surgeryPic,
  ambulance,
  optometry,
  // Opthalmic,
  testingDr,
  womanDoctorWhite,
  horizontalMan
}



export const womenProducts = [
  {
    id: 1,
    name: "Classic Brown Frame",
    category: "Eyeglasses",
    image: "/images/spec1.jpg",
    price: 120,
    offerPrice: 89,
    rating: 4
  },
  {
    id: 2,
    name: "Light Pink Matte",
    category: "Eyeglasses",
    image: "/images/spec2.jpg",
    price: 150,
    offerPrice: 109,
    rating: 5
  },
  {
    id: 3,
    name: "Transparent Crystal",
    category: "Eyeglasses",
    image: "/images/spec3.jpg",
    price: 135,
    offerPrice: 99,
    rating: 4.5
  },
  {
    id: 4,
    name: "Round Retro Frame",
    category: "Eyeglasses",
    image: "/images/spec4.jpg",
    price: 165,
    offerPrice: 120,
    rating: 4
  },
  {
    id: 5,
    name: "Luxury Gold Metal",
    category: "Eyeglasses",
    image: "/images/spec5.jpg",
    price: 180,
    offerPrice: 139,
    rating: 5
  },
  {
    id: 6,
    name: "Rose Gold Oval",
    category: "Eyeglasses",
    image: "/images/spec6.jpg",
    price: 200,
    offerPrice: 155,
    rating: 4
  },
];

export const dummyTestimonialData = [
  {
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: 'John Doe',
    heading:"great work",
    title: 'Marketing Director, TechCorp',
    content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
    rating: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: 'Jane Smith',
    heading:"great work",
    title: 'Content Creator, TechCorp',
    content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    name: 'David Lee',
    heading:"great work",
    title: 'Content Writer, TechCorp',
    content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
    rating: 4,
  },
];


export const specialDoctors = [
  {
    images:grandDr,
    name:"dr.laurence oilivier",
    department:"lens replacement"
  },
  {
    images:ladyDr,
    name:"dr.laurence oilivier",
    department:"lens replacement"
  },
  {
    images:firstdr,
    name:"dr.laurence oilivier",
    department:"lens replacement"
  },
  {
    images:secondDr,
    name:"dr.laurence oilivier",
    department:"lens replacement"
  },
  {
    images:thirdDr,
    name:"dr.laurence oilivier",
    department:"lens replacement"
  },
  {
    images:fourthDr,
    name:"dr.laurence oilivier",
    department:"lens replacement"
  },
]

export const specsData = [
  { 
    id: 1, 
    name: "Eco tyne cry", 
    actualPrice: 2499, 
    discription:"budapest white 51 18145",
    offerPrice: 1999, 
    saleTag: "SALE",
    image: printSpecs 
  },
  { 
    id: 2, 
    name: "Eco tyne cry", 
    actualPrice: 3499, 
    discription:"budapest white 51 18145",
    offerPrice: 2999, 
    saleTag: "HOT",
    image: printSpecs
  },
  { 
    id: 3, 
    name: "Eco tyne cry", 
    actualPrice: 1999, 
    offerPrice: 1499, 
    discription:"budapest white 51 18145",
    saleTag: "",
    image: printSpecs 
  },
  { 
    id: 4, 
    name: "Eco tyne cry", 
    actualPrice: 2999, 
    discription:"budapest white 51 18145",
    offerPrice: 2499,
    saleTag: "SALE",
    image: printSpecs 
  },
  { 
    id: 5, 
    name: "Eco tyne cry", 
    actualPrice: 2299, 
    discription:"budapest white 51 18145",
    offerPrice: 1899,
    saleTag: "NEW",
    image: printSpecs 
  },
  { 
    id: 6, 
    name: "Eco tyne cry", 
    actualPrice: 1299, 
    offerPrice: 999,
    discription:"budapest white 51 18145",
    saleTag: "",
    image: printSpecs 
  },
  { 
    id: 7, 
    name: "Eco tyne cry", 
    actualPrice: 5499, 
    offerPrice: 4999,
    saleTag: "HOT",
    discription:"budapest white 51 18145",
    image: printSpecs 
    
  },
  { 
    id: 8, 
    name: "Eco tyne cry", 
    actualPrice: 4299, 
    offerPrice: 3799,
    discription:"budapest white 51 18145",
    saleTag: "SALE",
    image: printSpecs
  },
  { 
    id: 9, 
    name: "Eco tyne cry", 
    actualPrice: 4299, 
    offerPrice: 3799,
    discription:"budapest white 51 18145",
    saleTag: "SALE",
    image: printSpecs 
  },
];
