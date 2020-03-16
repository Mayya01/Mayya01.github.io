$(function () {
    needUpdateFiles = [];
    setTimeout(function () {
        checkAddProgrammActive();
        $("._checkbox-wrapper input").on("change ifChanged", function (e) {
            var obj = $(this);

            obj.closest(".js-needupdate-form").find(".form-standart__toogler").toggle();
        })
    }, 1000);

    var programUpdateSelectWrapperNode = $(".js-needupdateform-programm-select-wrapper").eq(0).clone();
    var programUpdateSelectNode = $(".js-needupdateform-programm-select").eq(0).clone();

    $(".js-needupdateform-add-select").on("click", function (e) {
        e.preventDefault();
        var obj = $(this);
        if (!obj.hasClass("_disabeled")) {
            programUpdateSelectWrapperNode.empty().insertBefore(obj);
            programUpdateSelectWrapperNode.append(programUpdateSelectNode);
            programUpdateSelectWrapperNode.find('select.select2').each(function () {
                $(this).select2({
                    minimumResultsForSearch: 8,
                });
            });
            programUpdateSelectWrapperNode = $(".js-needupdateform-programm-select-wrapper").eq(0).clone();
            programUpdateSelectNode = $(".js-needupdateform-programm-select").eq(0).clone();
            checkAddProgrammActive();
        }

    });

    $(document).on("change", ".js-needupdateform-programm-select", function (e) {
        var obj = $(this);
        var programmStr = "";
        obj.closest(".js-needupdate-form").find(".js-needupdateform-programm-select").each(function () {
            programmStr += $(this).val() + ";";
        });
        checkAddProgrammActive();
        $(".js-needupdateform-programm").find("input").val(programmStr);
    }).trigger("change");

    $(".js-needupdateform-custom").find("input").val($(".js-needupdateform-custom-select").val());
    $(document).on("change", ".js-needupdateform-custom-select", function (e) {
        var obj = $(this);
        $(".js-needupdateform-custom").find("input").val($(".js-needupdateform-custom-select").val());
    }).trigger("change");

    $(document).on("click", ".js-needupdate-file-delete",function(e){
        e.preventDefault();
        var obj = $(this);
        console.log(obj.data("name"));
        var fileWrap = $(this).closest(".form-standart__file");
        var fileUploaded = $(this).closest(".js-needupdate-file-uploaded");
        var form = obj.closest("form");
        var formData = new FormData(form.get(0));
        var ajaxPath = form.find('.js-needupdate-ajax-path').val();
        var ajaxDeletePath = form.find('.js-needupdate-ajax-delete-path').val();
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
                form.find(".js-needupdate-file-input").val("");
                if (result.STATUS) {
                    obj.closest("span").remove();
                    if(!fileUploaded.find("span").length){
                        fileUploaded.hide();
                    }

                    form.find(".js-needupdate-file-error").hide();


                } else {
                    form.find(".js-needupdate-file-error").show().text(result.MESSAGE);
                }
            },
            complete: function (result, status) {
                form.find(".js-needupdate-file-input").val("");
                fileWrap.removeClass("_loading");
                if (status != "success") {
                    form.find(".js-needupdate-file-error").show().html(status);
                }
            }
        });


    });

    $(document).on("change", ".js-needupdate-file-input", function () {
        var obj = $(this);
        var fileWrap = $(this).closest(".form-standart__file");
        var form = obj.closest("form");
        var formData = new FormData(form.get(0));
        var ajaxPath = form.find('.js-needupdate-ajax-path').val();
        var ajaxDeletePath = form.find('.js-needupdate-ajax-delete-path').val();
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
                    form.find(".js-needupdate-file-error").hide();
                    form.find(".js-needupdate-file-input").val("");
                    needUpdateFiles = [];
                    for (var i in result.FILE_ID) {
                        needUpdateFiles.push(result.FILE_ID[i]);
                    }

                    form.find(".js-needupdate-file-list").empty();
                    for (var i in needUpdateFiles) {
                        form.find(".js-needupdate-file-list").append('<span><i>'+
                            needUpdateFiles[i]["FILE_STR"] +
                            '</i><a data-id="'+needUpdateFiles[i]["ID"]+'" href="" class="form-standart__file-delete js-needupdate-file-delete">×</a></span>');
                    }
                    form.find(".js-needupdate-file-uploaded").show();


                } else {
                    form.find(".js-needupdate-file-error").show().text(result.MESSAGE);
                }
            },
            complete: function (result, status) {
                fileWrap.removeClass("_loading");
                if (status != "success") {
                    form.find(".js-needupdate-file-error").show().html(status);
                }
            }
        });
    });
});

function checkAddProgrammActive() {
    var isEmpty = false;
    $(".js-needupdate-form").find(".js-needupdate-programm-select").each(function () {
        if ($(this).val() == "") isEmpty = true;
    });
    if (isEmpty) {
        $(".js-needupdate-form").find(".js-needupdate-add-select").addClass("_disabeled");
    } else {
        $(".js-needupdate-form").find(".js-needupdate-add-select").removeClass("_disabeled");
    }
}