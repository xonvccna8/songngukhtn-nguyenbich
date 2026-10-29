"use client";

// Hộp thoại tạo lớp mới
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api, errorMessage } from "@/lib/api-client";
import { DEFAULT_GRADE } from "@/lib/curriculum";

export const FIELD = "h-12 rounded-xl border-2 border-line-2 bg-white px-3.5 text-base";

export function CreateClassDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const grade = DEFAULT_GRADE;
  const [teams, setTeams] = useState(4);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const { id } = await api<{ id: string }>("/api/classes", { body: { name, grade, teams } });
      toast.success(`Đã tạo lớp ${name}. Giờ hãy thêm học sinh nhé!`);
      onOpenChange(false);
      setName("");
      router.push(`/teacher/classes/${id}?add=1`);
    } catch (err) {
      toast.error(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-3xl p-6 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-extrabold">Tạo lớp mới</DialogTitle>
          <DialogDescription>Mã lớp sẽ được tạo tự động để học sinh đăng nhập.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="cname">Tên lớp</Label>
            <Input id="cname" required maxLength={40} value={name} onChange={(e) => setName(e.target.value)} placeholder="8A" className={FIELD} autoFocus />
          </div>
          <div className="space-y-1.5">
            <Label>Khối</Label>
            {/* Trang chỉ dạy KHTN lớp 8 */}
            <p className="flex h-12 items-center rounded-xl border-2 border-blue bg-blue-soft px-3.5 font-display text-lg font-extrabold text-blue-dk">Khối {grade}</p>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="teams">Số tổ</Label>
            <select id="teams" value={teams} onChange={(e) => setTeams(Number(e.target.value))} className={cn(FIELD, "w-full")}>
              {[2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} tổ
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={busy || !name.trim()}>
            {busy && <Loader2 className="animate-spin" />} Tạo lớp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
