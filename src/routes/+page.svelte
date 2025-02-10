
<script lang="ts">
    //TODO
</script>

<h1>LOG IN</h1>
<form>
<input type="text" id="username" name="username" placeholder="Username"><br>
<input type="password" id="pswd" name="pswd" placeholder="Password"><br>
<input type="submit" value="Submit">
</form>



<!--Tailwindcss will be done after, normal css for placeholder-->
<!---<style>
    @reference "tailwindcss/theme";
    :global(html) {
      background-color: theme(--color-gray-100);
    }
</style>
-->

<style>
    *{
        text-align: center;
    }
    h1{
        font-size: 100px;
        font-weight: bold;
    }
    input{
        border-color: black;
        border-width: 2px;
        margin-top: 10px;
        border-radius: 10px;
        padding: 3px;
    }
    input[type="submit"]{
        padding-left: 67.5px;
        padding-right: 67.5px;
        
    } 
    input[type="submit"]:hover{
        background-color: lightblue;
        color: black;
        cursor: pointer;
    } 
    label{
        
    }

    </style>
