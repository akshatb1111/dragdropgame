<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fill Your Plate</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f9f9f9;
    }
    h1 {
      color: #4caf50;
    }
    #game-area {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }
    #plate {
      border: 3px solid #ccc;
      border-radius: 50%;
      width: 400px;
      height: 400px;
      background-color: #fff;
      margin: auto;
      position: relative;
      overflow: hidden;
    }
    #plate span {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ccc;
      font-size: 20px;
    }
    .item-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }
    .item {
      width: 60px;
      height: 60px;
      cursor: grab;
    }
    /* Bounce animation */
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
      }
    }
    .bouncing {
      animation: bounce 0.5s ease;
    }
    /* Reset Button */
    #resetButton {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #4caf50;
      color: white;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }
    #resetButton:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <h1>Fill Your Plate</h1>
  <p>Drag and drop food items into the plate!</p>
  <div id="game-area">
    <div id="plate">
      <span>Drag items here</span>
    </div>
  </div>
  <div class="item-container">
    <img src="chapati.png" class="item" draggable="true">
    <img src="rice.png" class="item" draggable="true">
    <img src="green.png" class="item" draggable="true">
    <img src="pulses.png" class="item" draggable="true">
    <img src="vegetables.png" class="item" draggable="true">
    <img src="daal.png" class="item" draggable="true">
    <img src="salad.png" class="item" draggable="true">
    <img src="sweets.png" class="item" draggable="true">
    <img src="pastry.png" class="item" draggable="true">
    <img src="chips.png" class="item" draggable="true">
    <img src="buttermilk.png" class="item" draggable="true">
    <img src="curd.png" class="item" draggable="true">
    <img src="softdrink.png" class="item" draggable="true">
    <img src="samosa.png" class="item" draggable="true">
    <img src="vadapav.png" class="item" draggable="true">
    <img src="burger.png" class="item" draggable="true">
    <img src="sandwich.png" class="item" draggable="true">
    <img src="pizza.png" class="item" draggable="true">
    <img src="papad.png" class="item" draggable="true">
    <img src="chutney.png" class="item" draggable="true">
    <img src="dessert.png" class="item" draggable="true">
  </div>

  <!-- Reset Button -->
  <button id="resetButton">Reset Plate</button>

  <script src="game.js"></script>
</body>
</html>
