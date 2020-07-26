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
    filterRestaurantByCity(restaurantCity)
    {
        
    
        return restaurantCity.city=="Anantapur";
    }
        
    
}
     function execute() 
    {
        console.log("List of all restaurants")
        for(var i=0;i<restaurantList.length;i++)
        {
        var obj=new restaurantManager(restaurantList[i].name,restaurantList[i].address,restaurantList[i].city);
         obj.printAllRestaurantNames();
        }
         console.log("Filtering restaurants according to cities")
        var obj=new restaurantManager();
        let c=restaurantList.filter(obj.filterRestaurantByCity);
         console.log(c);
    



    }
execute();