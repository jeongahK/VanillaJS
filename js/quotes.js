const quotes = [
    {
        quote: "때론 기회를 놓치는 것이 기회일 수 있다.",
        author: "영화 <벤자민 버튼의 시간은 거꾸로 간다>",
    },
    {
        quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라",
        author: "제임스틴",
    },
    {
        quote: "인생은 원래 공평하지 못하다. 그런 현실에 대하여 불평할 생각하지 말고 받아들여라",
        author: "빌 게이츠",
    },
    {
        quote: "미래를 계획하는 일도 필요하지만 가장 중요한 것은 오늘을 후회없이 사는 겁니다.",
        author: "<비밀편지> 박근호",
    },
    {
        quote: "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
        author: "벤 스타인",
    },
    {
        quote: "지금이 최악이라고 말할 힘이 있다면 아직은 최악이 아니다.",
        author: "윌리엄 셰익스피어",
    },
    {
        quote: "긴 인생은 충분히 좋지 않을 수도 있다. 그러나 좋은 인생은 충분히 길다.",
        author: "벤자민 프랭클린",
    },
    {
        quote: "인생은 자전거를 타는 것과 같다. 계속 페달을 발는 한 넘어질 염려는 없다.",
        author: "클라우드 페퍼",
    },
    {
        quote: "나는 신발이 없음을 한탄했는데, 거리에서 발이 없는 사람을 만났다.",
        author: "데일 카네기",
    },
    {
        quote: "인생은 스스로 알아서 하지 않으면 아무도 아무것도 가르쳐 주지 않는다.",
        author: "빌 게이츠"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// random: 0 ~ 1 사이 랜덤한 값 제공
// 소수점 제거: round, ceil, floor

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;