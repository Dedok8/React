export function UserItem({ user, children }) {
  return (
    <div className="flex items-center border-b border-slate-700 py-2 px-2 gap-2">
      <div className="flex min-w-[140px] max-w-[180px] flex-shrink-0">
        <strong className="truncate text-slate-100">{user.displayName}</strong>
      </div>
      <div className="flex min-w-[180px] max-w-[240px] flex-shrink-0">
        <span className="truncate text-xs text-slate-400">{user.email}</span>
      </div>
      <div className="flex min-w-[80px] max-w-[100px] flex-shrink-0 justify-center">
        <span className="text-xs text-slate-500 italic">{user.role}</span>
      </div>
      <div className="flex justify-end items-center min-w-0">{children}</div>
    </div>
  );
}
