<script>
    export let version;
</script>
<div class="preloader">
    <div class="pre">

        <!-- <div class="logo">
            <div class="lg">
                <Logo />
            </div>
        </div> -->
        <div class="text">
            <h1>
                <span>K</span><span style="opacity: 0;">_</span><span>F</span><span>O</span><span>O</span><span>D</span><span>S</span>
            </h1>	
            <p>version {version}</p>
        </div>
        <p class="copy">
            ©  BUTAO DEV | 2022 😅
        </p>
        
        
        

    </div>
</div>
<style lang="scss">
	
    @import "../_config.scss";

    .preloader{
				position: relative;
				z-index: 100;
				height: 100vh;
				justify-content: center;
				backdrop-filter: blur(1px);
				display: flex;
				border-radius: 1rem;
				align-items: center;
				.pre{
					text-align: center;
					.copy{
						@include font(var(--tc), 12px, 600);
						background: var(--gwp);
						padding: 10px;
						border-radius: 4rem;
						opacity: 80%;
					}
					.text{
						p{
							@include font(var(--d-be), 0.85rem, 600);
							text-transform: uppercase;
							margin: 20px 0;
							padding: 10px;
						}
						h1{
							margin: 5px;
							span{
								letter-spacing: 10px;
								margin: 10px;
								background: var(--gwp);
								@include font(transparent, 3rem, 900);
								position:relative;
								box-shadow:0 0 20px rgba(0, 0, 0, 0.07);
								animation:bouncer cubic-bezier(.455,.03,.515,.955) .75s infinite alternate;
								padding: 7px 8px;
								border-radius: 5px;
								-webkit-background-clip: text;
								background-clip: text;
							}
							span:nth-child(5n+1){
						
								animation-delay:0
							}
							span:nth-child(5n+2){
								animation-delay:calc(0s + (.1s * 12))

							}
							span:nth-child(5n+3){
			
								animation-delay:calc(0s + (.1s * 2))
							}
							span:nth-child(5n+4){
								
								animation-delay:calc(0s + (.1s * 4))
							}
							span:nth-child(5n+5){
								
								animation-delay:calc(0s + (.1s * 6))
							}
							span:nth-child(5n+6){
								
								animation-delay:calc(0s + (.1s * 8))
							}
							span:nth-child(5n+7){
								
								animation-delay:calc(0s + (.1s * 10))
							}
						}
						
						
						@keyframes bouncer{
							to{
									box-shadow:0 0 20px rgba(0,0,0,.3);
									transform:scale(1.55) translateY(-20px);
									font-size: 0.9rem;
									
									
								}
							}
					}

				}
			}

</style>