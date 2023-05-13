<script>
	export let access_token; 
	export let token_type; 
	export let expires_in; 
	export let refresh_token; 
	export let scope;
</script>

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="nestjs app with svelte templates" />
  </head>
  <body>
	<p>access_token = {access_token}</p>
	<p>token_type = {token_type}</p>
	<p>expires_in = {expires_in}</p>
	<p>refresh_token = {refresh_token}</p>
	<p>scope = {scope}</p>
  </body>
</html>