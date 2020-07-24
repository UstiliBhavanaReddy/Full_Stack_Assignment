let  restaurantList=[
    {
        name:"paradise",
        address:"kairthabad",
        city:"Hyderabad"
    },
    {
        name:"pizahut",
        address:"HSR layout",
        city:"Bangalore"
    },
    {
        name:"spice-touch",
        address:"supthagiri circle",
        city:"Anantapur"
    },
    {
        name:"parklane",
        address:"near busstand",
        city:"Anantapur"
    },
    {
        name:"chillies",
        address:"Bypass",
        city:"Thirupati"
    }

]


class restaurantManager{
    constructor(name,address,city)
    {
        this.name=name;
        this.address=address;
        this.city=city;
    }
     
 printAllRestaurantNames(){
        console.log(this.name);
    }
    filterRestaurantByCity(city)
    {
        if(city==this.city)
        {
            console.log(this.name);
            console.log(this.address);
            console.log(this.city);
        }
    }
}
     function execute() 
    {
        console.log("list of all restaurants")
        for(var i=0;i<restaurantList.length;i++)
        {
        var obj=new restaurantManager(restaurantList[i].name,restaurantList[i].address,restaurantList[i].city);
         obj.printAllRestaurantNames();
        }
         console.log("filter according to cities")

    
    for(i=0;i<restaurantList.length;i++)
        {
        var obj=new restaurantManager(restaurantList[i].name,restaurantList[i].address,restaurantList[i].city);
        obj.filterRestaurantByCity('Anantapur')


}
    }
execute();