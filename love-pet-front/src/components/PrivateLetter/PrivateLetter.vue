<template>
  <div class="PrivateLetter">
      <div class="privateletter">
          <div class="friend">
              <div class="frienduser">
                  
              </div>
          </div>
          <div class="chat">

          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .PrivateLetter {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .privateletter {
        width: 1000px;
        height: 800px;
        display: flex;

    }
    .friend {
        width: 25%;
        height: 100%;
        background-color: aqua;
    }
    .chat {
        width: 75%;
        height: 100%;
        background-color: yellow;
    }
    .frienduser {
        width: 100%;
        height: 80px;
        margin-top: 10px;
        background-color: red;
    }
</style>