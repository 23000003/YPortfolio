<script setup lang="ts">

</script>

<template>
    <div class="Projects-container">
        <div class="Project-label">
            <div class="label">
                <span>Contacts. <p>#</p></span>
            </div>
        </div>
        <!-- <div class="horiz"></div> -->
        <div class="All-Projects">

        </div>
    </div>
</template>

<style scoped>

    .Projects-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 10%;
        height: 50svh;
    }

    .About-Me{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .label{
        font-size: 3.5em;
        display: flex;
        flex-direction: row;
    }

    .label span{
        display: flex;
        gap: 15px;
    }

    .label p{
        margin: 0;
        color: #54c9a2;
    }

    .info{
        margin-top: 20px;
    }
    
    .Profile-Image{
        display: flex;
        align-items: center;
        max-width: 100%;
        width: 50%;
        z-index: 1;
        justify-content: center;
    }

    .horiz{
        width: 100%;
        height: 2px;
        background-color: #B7A2CE;
    }

    
</style>