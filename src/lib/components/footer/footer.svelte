<script>
	import { Link } from "../link";

    const current_date = new Date();
    const year = current_date.getFullYear();
</script>

<footer class="w-full py-5">
    <div class="max-w-default mx-auto flex items-center justify-between pt-[3rem]">
        <span class="text-muted-foreground text-sm">
            Copyright &copy; {year} Felipe Ornelis. Todos os direitos reservados.
        </span>

        <div class="flex items-center gap-5">
            <Link href="/help" class="text-muted-foreground text-sm">Ajuda</Link>
            <Link href="/terms" class="text-muted-foreground text-sm">Termos de uso</Link>
        </div>
    </div>
</footer>