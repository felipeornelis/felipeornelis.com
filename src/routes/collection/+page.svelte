<script lang="ts">
	import { Button } from "$lib/components/button";


</script>

<div class="w-full h-[35vw]">
    <div class="size-full overflow-hidden relative flex items-center justify-center from-[#00acd7] bg-gradient-to-r to-[#019bc2]">
        <div class="flex flex-col gap-10 max-w-[36rem] items-center">
            <svg width="220" height="40" viewBox="0 0 220 40" xmlns="http://www.w3.org/2000/svg">
  <style>
    @font-face {
      font-family: "Go Bold";
      src: url("https://raw.githubusercontent.com/golang/image/master/font/gofont/ttfs/Go-Bold.ttf") format("truetype");
    }
    .go-text {
      font-family: "Go Bold", sans-serif;
      font-size: 32px;
      fill: white;
    }
  </style>
  <text x="0" y="32" class="go-text">Manual de Go</text>
</svg>
            

            <p class="text-[#1C1A1A] text-[1.25rem] text-center -tracking-tight font-medium">
                Aliquip Lorem veniam quis ullamco officia eiusmod non consectetur qui sint pariatur qui in. Aliquip Lorem veniam quis ullamco.
            </p>

            <div class="w-full flex gap-[1.25rem] text-[0.875rem] items-center justify-center">
                <Button
                    as="a"
                    href="/collection/golang/introduction"
                    variant="secondary"
                >
                    Ler agora
                </Button>

                <Button as="button" variant="ghost" class="text-black">
                    Adicionar à lista
                </Button>
            </div>
        </div>
    </div>
</div>