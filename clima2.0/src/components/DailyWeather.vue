<template>
    <div class="dailyCard">
    <h2>{{msg}}</h2>
        <div class="SingleDayCard" >
            



            <div class="note">
                <img alt="" src="../assets/pen.svg" >
                <textarea name="" id="notes" cols="30" rows="10" placeholder="escribe aquí tu tarea"></textarea>
            </div>
            <div class="advice">
                <img alt="" src="../assets/idea.svg" >
                <textarea name="" id="" cols="30" rows="10">aquí te doy un consejo teniendo en cuenta el clima</textarea>
               
           </div>
        </div>
    </div>


</template>

<script>
export default {
    name: 'DailyWeather',
    props:{
        msg:String
    }
} 
</script>
<style >
.dailyCard{ border: solid 2px black; background-color: #d9d9d9 ;


}

</style>
