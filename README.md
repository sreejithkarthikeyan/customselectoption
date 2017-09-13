# customselectoption
### A simple jQuery plugin for custom select option  .

## Manual
## 1.Plugin  with minimal effects.

### Steps to create .

#### Adding Style sheet in your html page

```<link href="css/customselectoption.css" rel="stylesheet">```

#### Add js file in your html page

```<script type="text/javascript" src="js/customselectoption.js"></script> ```

#### Add div in html page with attribute 'class' as  'cselect' 

```
<select class="cselect">
 <option value="select"> select </option>
<option value="Shape"> Shape </option>
<option value="Triangle"> Triangle </option>
<option value="Star"> Star </option>
<option value="Diamond"> Diamond </option>
</select>
```
 Add class name as "cselect" to the select tag , This is important to create customselectoption.
 If u dont need custom select , just remove the calss name "cselect" from the select tag.
 Add script in html page

```
      <script>
       $(function() {
            $("body").customselectOpt({
                bgcolor: 'red',
                txtcolor: 'white',
                selecttext: ' '
            });
        });
       </script> 
```

Attributes

   ```
      bgcolor      : background color for selected option
      txtcolor     : text color for selected option
  ```


External Files 

 Add jquery.js and bootstrap css.
 ```
<script src="js/jquery-3.1.1.min.js"></script>
<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">
 ```
 
### Download Links 

##### Jquery [Download](http://jquery.com/download/).
## [Download Demo](https://github.com/sreejithkarthikeyan/customselectoption/tree/master/demo)

#### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/sreejithkarthikeyan/customselectoption/blob/master/LICENSE.md) file for details


### Contact me either by [facebook](https://www.facebook.com/sreejithks)  or emailing me to [sreeksleo@gmail.com](https://mailto:sreeksleo@gmail.com)

#### THANKS
##### SREEJITH. K. S
