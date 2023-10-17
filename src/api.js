// Base Url //

const base_url = 'https://api.rawg.io/api/';
const apiKey = 'de13050588b5421aa64dcf9763ef2df5';

//Getting gate

const getCurrentMonth = () =>  {
    const month = new Date().getMonth() + 1;
    if(month < 10) {
        return `0${month}`
    }else{
        return month;
    }
};

const getCurrentDay = () =>  {
    const day = new Date().getDay();
    if(day < 10) {
        return `0${day}`
    }else{
        return day;
    }
};

//Current Day Year Month

const currentyear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentyear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentyear -1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentyear +1}-${currentMonth}-${currentDay}`;

//Popular games//

//Popular games//
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${apiKey}`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${apiKey}`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${apiKey}`;

export const popularGamesUrl = () => `${base_url}${popular_games}`
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`
export const newGamesUrl = () => `${base_url}${new_games}`

//Game Details

export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}?key=${apiKey}`
export const gameScreenshotUrl = (game_id) => `${base_url}games/${game_id}/screenshots?key=${apiKey}`

export const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}&page_size=9&key=${apiKey}`