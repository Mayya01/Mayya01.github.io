$(function () {
    testDriveFiles = [];
    setTimeout(function () {
        checkAddProgrammActive();
        $("._checkbox-wrapper input").on("change ifChanged", function (e) {
            var obj = $(this);

            obj.closest(".js-testdrive-form").find(".form-standart__toogler").toggle();
        })
    }, 1000);

    var programSelectWrapperNode = $(".js-testdriveform-programm-select-wrapper").eq(0).clone();
    var programSelectNode = $(".js-testdriveform-programm-select").eq(0).clone();

    $(".js-testdriveform-add-select").on("click", function (e) {
        e.preventDefault();
        var obj = $(this);
        if (!obj.hasClass("_disabeled")) {
            programSelectWrapperNode.empty().insertBefore(obj);
            programSelectWrapperNode.append(programSelectNode);
            programSelectWrapperNode.find('select.select2').each(function () {
                $(this).select2({
                    minimumResultsForSearch: 8,
                });
            });
            programSelectWrapperNode = $(".js-testdriveform-programm-select-wrapper").eq(0).clone();
            programSelectNode = $(".js-testdriveform-programm-select").eq(0).clone();
            checkAddProgrammActive();
        }

    });

    $(document).on("change", ".js-testdriveform-programm-select", function (e) {
        var obj = $(this);
        var programmStr = "";
        obj.closest(".js-testdrive-form").find(".js-testdriveform-programm-select").each(function () {
            programmStr += $(this).val() + ";";
        });
        checkAddProgrammActive();
        $(".js-testdriveform-programm").find("input").val(programmStr);
    }).trigger("change");

    $(document).on("click", ".js-testdrive-file-delete",function(e){
        e.preventDefault();
        var obj = $(this);
        console.log(obj.data("name"));
        var fileWrap = $(this).closest(".form-standart__file");
        var fileUploaded = $(this).closest(".js-testdriveform-file-uploaded");
        var form = obj.closest("form");
        var formData = new FormData(form.get(0));
        var ajaxPath = form.find('.js-testdrive-ajax-path').val();
        var ajaxDeletePath = form.find('.js-testdrive-ajax-delete-path').val();
        fileWrap.addClass("_loading");

        $.ajax({
            url: ajaxDeletePath,
            data: {
                "FILE_ID" : obj.data("id")
            },
            type: "GET",
            dataType: "json",
            success: function (result) {
                fileWrap.removeClass("_loading");
                form.find(".js-testdrive-file-input").val("");
                if (result.STATUS) {
                    obj.closest("span").remove();
                    if(!fileUploaded.find("span").length){
                        fileUploaded.hide();
                    }

                    form.find(".js-testdrive-file-error").hide();


                } else {
                    form.find(".js-testdrive-file-error").show().text(result.MESSAGE);
                }
            },
            complete: function (result, status) {
                form.find(".js-testdrive-file-input").val("");
                fileWrap.removeClass("_loading");
                if (status != "success") {
                    form.find(".js-testdrive-file-error").show().html(status);
                }
            }
        });


    });

    $(document).on("change", ".js-testdrive-file-input", function () {
        var obj = $(this);
        var fileWrap = $(this).closest(".form-standart__file");
        var form = obj.closest("form");
        var formData = new FormData(form.get(0));
        var ajaxPath = form.find('.js-testdrive-ajax-path').val();
        fileWrap.addClass("_loading");

        $.ajax({
            url: ajaxPath,
            data: formData,
            type: "POST",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (result) {
                fileWrap.removeClass("_loading");
                if (result.STATUS) {
                    form.find(".js-testdrive-file-error").hide();
                    form.find(".js-testdrive-file-input").val("");
                    testDriveFiles = [];
                    for (var i in result.FILE_ID) {
                        testDriveFiles.push(result.FILE_ID[i]);
                    }

                    form.find(".js-testdrive-file-list").empty();
                    for (var i in testDriveFiles) {
                        form.find(".js-testdrive-file-list").append('<span ><i>'+
                            testDriveFiles[i]["FILE_STR"] +
                            '</i><a data-id="'+testDriveFiles[i]["ID"]+'" href="" class="form-standart__file-delete js-testdrive-file-delete">×</a></span>');
                    }
                    form.find(".js-testdrive-file-uploaded").show();


                } else {
                    form.find(".js-testdrive-file-error").show().text(result.MESSAGE);
                }
            },
            complete: function (result, status) {
                fileWrap.removeClass("_loading");
                if (status != "success") {
                    form.find(".js-testdrive-file-error").show().html(status);
                }
            }
        });

        console.log(form);
        console.log(formData);
        console.log(ajaxPath);
    });
});

function checkAddProgrammActive() {
    var isEmpty = false;
    $(".js-testdrive-form").find(".js-testdriveform-programm-select").each(function () {
        if ($(this).val() == "") isEmpty = true;
    });
    if (isEmpty) {
        $(".js-testdrive-form").find(".js-testdriveform-add-select").addClass("_disabeled");
    } else {
        $(".js-testdrive-form").find(".js-testdriveform-add-select").removeClass("_disabeled");
    }
}