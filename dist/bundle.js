function fails(exec) {
    try {
        return !!exec();
    } catch (e) {
        return true;
    }
}var SUPPORTS_Y = !fails(function () { });

if (SUPPORTS_Y) {
    console.log('yes');
} else {
    console.log('no');
}
