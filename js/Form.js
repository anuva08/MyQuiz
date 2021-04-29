class Form {
  constructor() {
    this.input = createInput("Name");
    this.answer = createInput("Enter Option number");
    this.button = createButton('Submit');
    this. greeting = createElement('h3');
    
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.answer.hide();
  }
  
  
  display(){
    var title = createElement('h1')
    title.html("My quiz game");
    title.position(130, 0);
     
    var question = createElement('h3')
    question.html("Which fruit is made up of 97% water?");
    question.position(70,80);

    var option1 = createElement('h3')
    option1.html("1 : Watermelon");
    option1.position(70,100);

    var option2 = createElement('h3')
    option2.html("2 : Mango");
    option2.position(70,120);

    var option3 = createElement('h3')
    option3.html("3 : Cucumber");
    option3.position(70,140);

    var option4 = createElement('h3')
    option4.html("4 : Passion Fruit");
    option4.position(70,160);
    
    this.input.position(130, 250);
    this. button.position(250,340);
    this.answer.position(130,290);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.answer.hide();

      player.name = this.input.value();
      player.ans = this.answer.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 250)
    });

  }
}
