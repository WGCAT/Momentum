const quotes = [
    {
        quote: "혼자서는 작은 한 방울이지만 함께 모이면 바다를 이룹니다.",
        author: "Ryunosuke Satoro",
    },
    {
        quote: "훌륭한 팀은 팀워크 문화를 조성하여 성공을 위한 초석을 다집니다.",
        author: "Ted Sundquist",
    },
    {
        quote: "모두가 함께 앞으로 나아가면 성공은 저절로 따라옵니다.",
        author: "Henry Ford",
    },
    {
        quote: "우리 모두 스스로가 원하는 리더가 됩시다.",
        author: "Simon Sinek",
    },
    {
        quote: "팀워크의 좋은 점은 언제나 나를 지지해 주는 누군가가 있다는 것입니다.",
        author: "Margaret Carty",
    },
    {
        quote: "뛰어난 팀은 서로 감추지 않습니다. 치부를 드러내길 꺼리지 않습니다. 비난을 두려워하지 않고 자신의 실수, 약점, 걱정을 인정합니다.",
        author: "Patrick Lencioni",
    },
    {
        quote: "한 사람이 팀에 지대한 역할을 할 수 있지만, 한 사람으로 팀을 만들 수는 없습니다.",
        author: "Kareem Abdul-Jabbar",
    },
    {
        quote: "개개인이 힘을 합쳐 팀으로써 함께 이뤄내는 것은 팀, 회사, 사회를 제대로 작동하게 하는 원동력입니다.",
        author: "Vince Lombardi",
    },
    {
        quote: "목표를 가진 사람은 성공합니다. 어디로 가고 있는지 알기 때문입니다.",
        author: "Earl Nightingale",
    },
    {
        quote: "훌륭한 리더는 훌륭한 사람이라 성공하는 것이 아닙니다. 다른 사람들의 훌륭함을 끌어내기 때문에 성공하는 것입니다.",
        author: "Jon Gordon",
    },
    {
        quote: "동료에게 도움을 요청하세요. 빨리 그리고 자주 말이죠.",
        author: "Jill Konrath",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// 명언을 출력하기 위해 인덱스값을 랜덤으로 출력
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;