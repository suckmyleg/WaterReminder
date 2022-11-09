
function secondsFromNow(){
    var datetime_out = '06/30/2010 0:0 AM';

    return Math.abs(new Date() - new Date(datetime_out)) / 1000;
}

function secondsFrom(seconds){
    return secondsFromNow() - seconds;
}

function save_data_local(data, id){
    localStorage.setItem("Water"+id, JSON.stringify(data));
}

function get_data(id){
    return JSON.parse(localStorage.getItem("Water"+id));
}

function takeSip(){
    alert("Bebe agua");
}

function main_water(){
    
    nextSip = getNextSip();

    //console.log(nextSip, secondsFromNow());

    if(getNextSip() <= secondsFromNow()){
        takeSip();
        save_data_local(secondsFromNow(), "nextSip")
    }

    setTimeout(() => { main_water(); }, 2000);
}

function getNextSip() {
    var last = get_data("nextSip");

    if (last == undefined){
        save_data_local(secondsFromNow(), "nextSip")
        return getNextSip();
    }else{
        return last + 1800/2;
    }
}
main_water()