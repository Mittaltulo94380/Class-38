class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play")
        this.greeting=createElement('h2')

    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }
    display(){
        this.title.html('Car Racing game');
        this.title.position(displayWidth/2-50,0);


        // var input=createInput("Name");
        // var button=createButton('Play');
        // var greeting=createElement('h3');

        this.input.position(displayWidth/2-40,displayHeight/2-80);
       this.button.position(displayWidth/2+30,displayHeight/2);;

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome "+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4);

        });
        
    }
}