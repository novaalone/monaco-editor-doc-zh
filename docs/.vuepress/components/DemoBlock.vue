<template>
    <div class="demo-container">
        <slot/>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.demo-container {
    background: #eee;
    border-radius: 6px;
    margin: 1.6em 0;
    padding: 1.6em 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>