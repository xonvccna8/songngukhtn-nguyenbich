"use client";

// HS: Phòng thí nghiệm ảo — mô phỏng PhET song ngữ + mô hình 3D thầy cô thêm cho khối của em
import { StudentHeader, StudentShell, useStudent } from "@/components/student/student-shell";
import { LabBrowser } from "@/components/lab/lab";
import { useLabResources } from "@/lib/library/hooks";

export default function LabPage() {
  return (
    <StudentShell>
      <Lab />
    </StudentShell>
  );
}

function Lab() {
  const { cls } = useStudent();
  const resources = useLabResources(cls?.grade);
  return (
    <>
      <StudentHeader vi="Thí nghiệm ảo" en="Virtual lab" />
      <div className="px-5 pt-5">{cls ? <LabBrowser grade={cls.grade} resources={resources} compact /> : null}</div>
    </>
  );
}
