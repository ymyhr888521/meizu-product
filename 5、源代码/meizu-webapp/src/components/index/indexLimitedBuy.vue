<template>
    <div class="all">
        <div class="top">
            <h3>{{msg.title}}</h3>
            <div>
                <span>{{hours}}</span>:
                <span>{{minutes}}</span>:
                <span>{{seconds}}</span>
            </div>
        </div>
        <div class="bottom">
            <div class="contain">
                <div v-for="(item,index) in msg.imgs" class="goods">
                    <div>
                      <img :src="item">
                    </div>
                    <div>
                        <span>{{msg.nowPri[index]}}</span>
                        <span>{{msg.beforePri[index]}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "indexLimitedBuy",
        props:["msg"],
        data(){
            return {
                seconds:59,
                minutes:59,
                hours:23,
              }
        },
        methods:{
            _beginTime(){
                setInterval(()=>{
                    this.seconds--;
                        //逢六十进一
                        if(this.seconds<=0){
                            this.minutes--;
                            //逢六十进一
                            if(this.minutes<=0){
                                this.hours--;
                               this.minutes=60;
                            }
                            this.seconds=60;
                        }
                        this.seconds<10?this.seconds="0"+this.seconds:this.seconds;
                        this.minutes<10?this.minutes="0"+this.minutes:this.minutes;
                        this.hours<10?this.hours="0"+this.hours:this.hours;
                },1000);
            }
        },
        created(){
          this._beginTime();
        }
    }
</script>

<style scoped>
.all{
    width:100%;
    height:2.73rem;
    display: flex;
    background:#FCF8ED;
    flex-direction: column;
}
.all>.top{
    display: flex;
    height:.75rem;
    padding:.24rem .27rem 0 .27rem ;

    justify-content:space-between
}
.all>.top>h3{
    font-size:.22rem;
    color:#333333
}
.all>.top>div{
    display:flex;
    color:#ff9933;
}
.all>.top>div>span{
    color:#fff;
    width:.27rem;
    height:.30rem;
    background:#ff9933;
    border-radius:3px;
    margin:0 .08rem;
    text-align:center;
}
.all>.top>div>span:last-of-type{
    margin-right: 0;
}



.all>.bottom{
    height:1.74rem;
    width:100%;
    overflow:auto;

}
.all>.bottom>.contain{
    width:15.9rem;
    height:1.74rem;
    padding:0  0.12rem;
    display: flex;
}
.all>.bottom::-webkit-scrollbar{
     display: none;
}
.all>.bottom>.contain>.goods{
      width:1.59rem;
      height:100%;
      background: #fff;
      margin:0 .03rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
}
.all>.bottom>.contain>.goods:first-of-type{
      margin-left:0;
}
.all>.bottom>.contain>.goods:last-of-type{
      margin-right:0;
}
.all>.bottom>.contain>.goods>div:nth-of-type(1){
  display: flex;
  width:1.26rem;
  height:1.21rem;
}

.all>.bottom>.contain>.goods>div:nth-of-type(1) img{
    width:100%;
    height:100%;
}

.all>.bottom>.contain>.goods>div:nth-of-type(2){
    height:auto;
    text-align: center;
    display: flex;
    justify-content: space-between;
}

.all>.bottom>.contain>.goods>div:nth-of-type(2) span:nth-of-type(1){
    color:#ff3366;
    font-size:.14rem;
    font-weight: 600;

}
.all>.bottom>.contain>.goods>div:nth-of-type(2) span:nth-of-type(2){
   color:#999999;
   font-size:.11rem;
   font-weight: 100;
   text-decoration: line-through;
   padding-left:5px;

 }
</style>
