<script>
	import { Link } from "../link";

    const current_date = new Date();
    const year = current_date.getFullYear();
</script>

<footer class="w-full py-5 px-5">
    <div class="max-w-default mx-auto flex items-center justify-between pt-6 md:pt-12 flex-col md:flex-row">
        <p class="text-muted-foreground text-sm text-center md:text-left mb-7 md:m-0 flex md:block flex-col">
            <span>Copyright &copy; {year} Felipe Ornelis.</span> <span>Todos os direitos reservados.</span>
        </p>

        <div class="flex items-center gap-5">
            <Link href="/help" class="text-muted-foreground text-sm">Ajuda</Link>
            <Link href="/terms" class="text-muted-foreground text-sm">Termos de uso</Link>
        </div>
    </div>
</footer>