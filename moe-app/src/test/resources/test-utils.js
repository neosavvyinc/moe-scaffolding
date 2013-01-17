function checkForDuplicateIds(thisArg) {
    try {
        $('[id]').each(function () {
            var ids = $('[id=\'' + this.id + '\']');
            if (ids.length > 1 && ids[0] == this) {
                throw ('Multiple IDs #' + this.id);
            }
        });
    } catch (e) {
        thisArg.fail();
    }
}