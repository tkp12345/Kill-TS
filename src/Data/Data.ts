import {BsHouse,BsClipboardData,BsPeople,BsBox,BsFileBarGraph} from 'react-icons/bs'
import {RiMoneyDollarBoxFill,RiExchangeBoxLine,RiExchangeDollarFill} from 'react-icons/ri'

export const SidebarData = [
    {
        icon:BsHouse,
        heading:'Dashboard'
    },{
        icon:BsClipboardData,
        heading:'Orders'
    },{
        icon:BsPeople,
        heading:'Customers'
    },{
        icon:BsBox,
        heading:'Products'
    },{
        icon:BsFileBarGraph,
        heading:'Analytics'
    }
]

// Analytics Cards Data
export const cardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: RiMoneyDollarBoxFill,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: RiExchangeBoxLine,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround:
                "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: RiExchangeDollarFill,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
];