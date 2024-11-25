const BaseUrl = "https://hnz.li"

export default function Links(){
    return (
    <footer className="flex items-center justify-center text-center ">
        <div className="grid grid-cols-1  m-2 pd-2 text-2xl">
            <div className=""><a href={BaseUrl + "/ghp"}>Github - Husky-Devel</a></div>
            <div className=""><a href={BaseUrl + "/github"}>Github - HuskyNZ</a></div>
            <div className=""><a href={BaseUrl + "/yt"}>Youtube</a></div>
            <div className=""><a href={BaseUrl + "/twitch"}>Twitch</a></div>
            <div className=""><a href={BaseUrl + "/email"}>Email</a></div>
            
        </div>
    </footer>
    );
}