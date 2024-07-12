<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>JQuery PlayGround</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        <script>
            $(document).ready(function() {
                $("#target1").css("color", "red");
                $("#target1").prop("disabled", true);
                $("#target4").remove();
                $("#target2").appendTo("#right-well");
                $("#target5").clone().appendTo("#left-well");
                $("#target1").parent().css("background-color", "red");
                $("#right-well").children().css("color", "orange");
                $("#left-well").children().css("color", "green");
                $(".target:nth-child(2)").addClass("animated bounce");
                $(".target:even").addClass("animated shake");
                $("body").addClass("animated hinge");
            });
        </script>
    </head>
    <!-- Remaining HTML code below -->
    <body>
        <div class="container-fluid">
            <h3 class="text-primary text-center">jQuery Playground</h3>
            <div class="row">
                <div class="col-xs-6">
                    <h4>#left-well</h4>
                    <div class="well" id="left-well">
                        <button class="btn btn-default target" id="target1">#target1</button>
                        <button class="btn btn-default target" id="target2">#target2</button>
                        <button class="btn btn-default target" id="target3">#target3</button>
                    </div>
                </div>
                <div class="col-xs-6">
                    <h4>#right-well</h4>
                    <div class="well" id="right-well">
                        <button class="btn btn-default target" id="target4">#target4</button>
                        <button class="btn btn-default target" id="target5">#target5</button>
                        <button class="btn btn-default target" id="target6">#target6</button>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>
